from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy.ext.hybrid import hybrid_property
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String, nullable=False)
  _password_hash = db.Column(db.String)
  username = db.Column(db.String, unique=True, nullable=False)
  country = db.Column(db.String, nullable=False)
  state = db.Column(db.String)
  city = db.Column(db.String)
  image = db.Column(db.String, nullable=True)
  biography = db.Column(db.String)
  type = db.Column(db.String)
  genre = db.Column(db.String, nullable=False)

  posts = db.relationship('Post', back_populates='user')
  tags = db.relationship('Tag', back_populates='user', cascade='all, delete-orphan')
  song_data = db.relationship('SongData', back_populates='user', cascade='all, delete-orphan')

  # Serialization rules 
  serialize_rules =['-posts.user', '-tags.user', '-song_data.user']

  @hybrid_property
  def password_hash(self):
      return self._password_hash

  @password_hash.setter
  def password_hash(self, new_pass):
      pass_hash = bcrypt.generate_password_hash(new_pass.encode('utf-8'))
      self._password_hash = pass_hash.decode('utf-8')
  
  def authenticate(self, password):
      return bcrypt.check_password_hash(self._password_hash, password.encode('utf-8'))


class SongData(db.Model, SerializerMixin):
  __tablename__ = 'song_data'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  song_url = db.Column(db.String, nullable=True)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='song_data')

    # Serialization rules
  serialize_rules = ['-user.song_data']


class Post(db.Model, SerializerMixin):
  __tablename__ = "posts"

  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.String)
  details = db.Column(db.String)
  time_posted = db.Column(db.Integer)

  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='posts')

  # Serialization rules 
  serialize_rules = ['-user.posts']

    # created_at = db.Column(db.DateTime(timezone=True),
    #                        server_default=func.now())


class Tag(db.Model, SerializerMixin):
  __tablename__ = "tags"

  id = db.Column(db.Integer, primary_key=True)
  tag_name = db.Column(db.String)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='tags')

  serialize_rules =['-user.tags']


# class Conversation(db.Model):
#   id = db.Column(db.Integer, primary_key=True)
#   user1_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#   user2_id = db.Column(db.Integer, db.ForeignKey('usesr.id'), nullable=False)

# class PrivateMessage(db.Model):
#   id = db.Column(db.Integer, primary_key=True)
#   conversation_id = db.Column(db.Integer, db.ForeignKey('conversation.id'), nullable=False)
#   sender_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#   recipient_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
#   message = db.Column(db.String(255), nullable=False)
#   timestamp = db.Column(db.DateTime, default=datetime.now)

