from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData, DateTime
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

from config import db, bcrypt

class User(db.Model, SerializerMixin):
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  email = db.Column(db.String, nullable=False)
  _password_hash = db.Column(db.String)
  username = db.Column(db.String, unique=True, nullable=False)
  country = db.Column(db.String, nullable=False)
  state = db.Column(db.String, nullable=False)
  city = db.Column(db.String, nullable=False)
  image = db.Column(db.String)
  biography = db.Column(db.String)
  type = db.Column(db.String)
  genre = db.Column(db.String, nullable=False)

  posts = db.relationship('Post', back_populates='user')
  tags = db.relationship('Tag', back_populates='user', cascade='all, delete-orphan')
  song_data = db.relationship('SongData', back_populates='user', cascade='all, delete-orphan')

  # Serialization rules 
  serialize_rules =['-posts.user', '-tags.user', '-song_data.user']


class SongData(db.Model, SerializerMixin):
  __tablename__ = 'song_data'

  id = db.Column(db.Integer, primary_key=True)
  title = db.Column(db.String)
  song_url = db.Column(db.String)
  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates='song_data')

    # Serialization rules
  serialize_rules = ['-user.song_data']


class Post(db.Model, SerializerMixin):
  __tablename__ = "posts"

  id = db.Column(db.Integer, primary_key=True)
  description = db.Column(db.String)
  details = db.Column(db.String)
  time_posted = db.Column(db.String)

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

