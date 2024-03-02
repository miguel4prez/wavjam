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

@app.route('/users/<int:id>')
def get_user_by_id(id):
  single_user = User.query.filter(User.id == id).first()

  if single_user is None:
    return {'error': 'user not found'}, 404

  return single_user.to_dict(), 200

@app.route('/users/<int:id>/similar_users')
def get_user_tag(id):
  single_user = User.query.filter(User.id == id).first()

  user_tags = [tag.tag_name for tag in single_user.tags]

  matched_tags = Tag.query.filter(Tag.tag_name.in_(user_tags)).all()

  matched_users = [tag.user_id for tag in matched_tags] 

  users = [user.to_dict() for user in User.query.filter(User.id.in_(matched_users)).all()]

  return users, 200


@app.route('/posts')
def get_all_posts():
  all_posts = [post.to_dict() for post in Post.query.all()]

  return all_posts, 200

@app.route('/posts/<int:id>')
def get_post_by_id(id):
  single_post = Post.query.filter(Post.id == id).first()

  return single_post.to_dict(), 200





if __name__ == '__main__':
  app.run(port=5555, debug=True)