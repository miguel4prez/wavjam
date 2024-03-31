from flask import request, session
from werkzeug.utils import secure_filename
from flask import send_from_directory
from models import User, Post, SongData, Tag
from config import app, db
import os
from datetime import datetime

@app.route('/')
def index():
  return 'This Is a Test'

@app.route('/users')
def get_all_users():
  all_users = [user.to_dict() for user in User.query.all()]

  return all_users, 200

@app.route('/users/<int:id>', methods=['GET', 'PATCH'])
def get_user_by_id(id):
  single_user = User.query.filter(User.id == id).first()

  if single_user is None:
    return {'error': 'user not found'}, 404
  
  if request.method == 'GET':
    return single_user.to_dict(), 200
  
  elif request.method == 'PATCH':
    json_data = request.form.to_dict()
    file = request.files.get('image')

  if file:
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    json_data['image'] = filename

  try: 
    for field in json_data:
      setattr(single_user, field, json_data[field])
  except ValueError as e:
    return {'error': str(e)}, 400
  
  db.session.add(single_user)
  db.session.commit()
  return single_user.to_dict(), 202


@app.route('/users/<int:id>/similar_users')
def get_user_tag(id):
  single_user = User.query.filter(User.id == id).first()

  if single_user is None:
    return {'error': 'User does not exist'}, 404

  user_tags = [tag.tag_name for tag in single_user.tags]

  matched_tags = Tag.query.filter(Tag.tag_name.in_(user_tags)).all()

  matched_users = [tag.user_id for tag in matched_tags if tag.user_id != id] 

  users = [user.to_dict() for user in User.query.filter(User.id.in_(matched_users)).all()]

  return users, 200





@app.route('/posts', methods=['GET', 'POST'])
def get_all_posts():
  all_posts = [post.to_dict() for post in Post.query.all()]

  if request.method == 'GET':
    return all_posts, 200
  elif request.method == 'POST':
    json_data = request.get_json()

    new_post = Post (
      description=json_data.get('description'),
      details=json_data.get('details'),
      time_posted=json_data.get('time_posted'),
      user_id=json_data.get('user_id')
    )

    db.session.add(new_post)
    db.session.commit()

    return new_post.to_dict(), 201

@app.route('/posts/<int:id>', methods=['GET', 'PATCH'])
def get_post_by_id(id):
  single_post = Post.query.get(id)

  if request.method == 'GET':
    return single_post.to_dict(), 200
  elif request.method == 'PATCH':
    json_data = request.form.to_dict()

    for field in json_data:
      setattr(single_post, field, json_data[field])
    
    db.session.add(single_post)
    db.session.commit()

    return single_post.to_dict(), 202


@app.route('/signup', methods=['POST'])
def signup():

  json_data = request.form.to_dict()
  file = request.files.get('image')
  audio = request.files.get('song_url')

  if file:
    filename = secure_filename(file.filename)
    file.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
    json_data['image'] = filename

  if audio:
    filename = secure_filename(audio.filename)
    audio.save(os.path.join(app.config['UPLOAD_AUDIO'], filename))
    json_data['song_url'] = filename

  new_user = User (
    email=json_data.get('email'),
    username=json_data.get('username'),
    country=json_data.get('country'),
    city=json_data.get('city'),
    state=json_data.get('state'),
    image=json_data.get('image'),
    biography=json_data.get('biography'),
    type=json_data.get('type'),
    genre=json_data.get('genre'),
  )

  new_user.password_hash = json_data.get('password')

  db.session.add(new_user)
  db.session.commit()

  new_song = SongData (
    user_id=new_user.id,
    title=json_data.get('title'),
    song_url=json_data.get('song_url')
  )

  db.session.add(new_song)
  db.session.commit()

  user_tags = json_data.get('tag_name').split(',')

  for tag_name in user_tags:
    new_tags = Tag(tag_name=tag_name, user_id=new_user.id)
    db.session.add(new_tags)
  
  
  db.session.commit()

  return new_user.to_dict(), 201

@app.route('/login', methods=['POST'])
def login():
  json_data = request.get_json()

  user = User.query.filter(User.username == json_data.get('username')).first()

  if not user:
    return {'error': 'user not found'}, 404
  
  if not user.authenticate(json_data.get('password')):
    return {'error': 'invalid password'}, 401
  
  session['user_id'] = user.id 
 
  return user.to_dict(), 200


@app.route('/logout', methods=['DELETE'])
def delete():

  session['user_id'] = None

  return {}, 204


@app.route('/check_session')
def get():

  user_id = session.get('user_id')

  if user_id:
    user = User.query.filter(User.id == session.get('user_id')).first()
    
    return user.to_dict(), 200
  else:
    return {'message': '401: Not Authorized'}, 401
  

if __name__ == '__main__':
  app.run(port=5555, debug=True)