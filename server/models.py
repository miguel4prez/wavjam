from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import MetaData
from sqlalchemy.orm import validates
from sqlalchemy_serializer import SerializerMixin

convention = {
    "ix": "ix_%(column_0_label)s",
    "uq": "uq_%(table_name)s_%(column_0_name)s",
    "ck": "ck_%(table_name)s_%(constraint_name)s",
    "fk": "fk_%(table_name)s_%(column_0_name)s_%(referred_table_name)s",
    "pk": "pk_%(table_name)s"
}

metadata = MetaData(naming_convention=convention)

db = SQLAlchemy(metadata=metadata)

class User(db.Model, SerializerMixin):
  __tablename__ = "users"

  id = db.Column(db.Integer, primary_key=True)
  name = db.Column(db.String, nullable=False)
  genre = db.Column(db.String, nullable=False)
  biography = db.Column(db.String)
  location = db.Column(db.String, nullable=False)
  country = db.Column(db.String, nullable=False)
  image = db.Column(db.String)

  typeof_id = db.Column(db.Integer, db.ForeignKey('typeofs.id'))

  typeofs = db.relationship('Typeof', back_populates= 'user')
  rating = db.relationship('Rating', back_populates= 'user')
  

class Rating(db.Model, SerializerMixin):
  __tablename__ = 'ratings'

  id = db.Column(db.Integer, primary_key=True)
  rating = db.Column(db.Integer)

  user_id = db.Column(db.Integer, db.ForeignKey('users.id'))

  user = db.relationship('User', back_populates= 'ratings')
  


class Typeof(db.Model, SerializerMixin):
  __tablename__ = 'typeofs'

  id = db.Column(db.Integer, primary_key = True)

  users = db.relationship('User', back_populates = 'typeofs')


## Pricing Section

class Price(db.Model, SerializerMixin):
  __tablename__ = 'prices'

  id = db.Column(db.Integer, primary_key=True)
  price_name = db.Column(db.Integer)
  price = db.Column(db.Integer)

class Offer(db.Model, SerializerMixin):
  __tablename__ = 'offers'

  id = db.Column(db.Integer, primary_key=True)
  offers = db.Column(db.String)