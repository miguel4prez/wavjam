from random import randint, choice as rc

from faker import Faker

from app import app
from models import db, User, Rating, Typeof

fake = Faker()

def create_user():
  users = []

  first_user = User(
    name ="The Pheonix Within",
    genre ="Rcok",
    image = "https://bloximages.chicago2.vip.townnews.com/qchron.com/content/tncms/assets/v3/editorial/5/7b/57b90b44-d695-5e72-9dc3-323972f02c63/523b096ea621f.image.jpg?resize=760%2C574",
    biography ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location ="Queens, NY",
    country ="US",
    rating = 5
  )
  second_user = User(
    name ="Drake",
    genre ="Rap",
    image = "https://thexplorion.com/wp-content/uploads/2020/09/Drake-1536x1024.jpg",
    biography ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location ="Toronto, Canada",
    country ="CA",
    rating = 3
  )
  third_user = User(
    name = "Red Hot Chili Peppers",
    genre ="Rock",
    image = "http://media.cleveland.com/popmusic_impact/photo/11106940-large.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Los Angeles, CA",
    country = "US",
    rating = 5
  )
  fourth_user = User (
    name = "Yame",
    genre = "R&B",
    image = "https://core.colorsxstudios.com/wp-content/uploads/2023/05/COLORSxSTUDIOS_Announcement_Yame-800x1000.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Paris, France",
    country = "FR",
    rating = 4
  )
  fifth_user = User (
    name = "Ronx",
    genre = "Pop-Punk",
    image = "https://framethestage.com/wp-content/uploads/2019/12/Ronx.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Bronx, NY",
    country = "US",
    rating = 5
  )
  sixth_user = User (
    name = "Pinegrove",
    genre = "Rock",
    image = "https://chorus.fm/wp-content/uploads/2016/04/pinegrove.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Montclair, New Jersey",
    country = "US",
    rating = 4
  )
  seventh_user = User (
    name = "Currents",
    genre = "Metalcore",
    image = "https://atomsplitterpr.com/wp-content/uploads/2020/04/unnamed-20.png",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Newtown, Conneticut",
    country = "US",
    rating = 3
  )
  eigth_user = User (
    name = "Noah Kahan",
    genre = "Folk-Pop",
    image = "https://wp.dailybruin.com/images/2021/09/web.ae_.noahkahan.qa_.A.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Strafford, Vermont",
    country = "US",
    rating = 4
  )
  ninth_user = User (
    name = "mouse on the keys",
    genre = "Mathrock",
    image = "https://a-girafe.com/wp-content/uploads/2020/06/motk-fo-scaled.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Tokyo, Japan",
    country = "JP",
    rating = 5
  )
  tenth_user = User (
    name = "Dustin Lynch",
    genre = "Country",
    image = "https://www.totalntertainment.com/wp-content/uploads/Dustin-Lynch.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Tullahoma, Tennessee",
    country = "US",
    rating = 3
  )

  users.append(first_user)
  users.append(second_user)
  users.append(third_user)
  users.append(fourth_user)
  users.append(fifth_user)
  users.append(sixth_user)
  users.append(seventh_user)
  users.append(eigth_user)
  users.append(ninth_user)
  users.append(tenth_user)

  return users

# def create_rating():
#   ratings = []
#   for _ in range(5):
#     r = Rating(
#       rating = str(randint(1, 5))
#     )
#     ratings.append(r)

# def create_types():
#   types_list = ['prodcuer', 'artist', 'band', 'engineer']
#   for i in range(types_list):
#     Typeof (
#       id = types_list[randint(i)]
#     )

if __name__ == "__main__":
  with app.app_context():
    print('Clearing db..')
    User.query.delete()
    
    print('Seeding users...')
    users = create_user()
    db.session.add(users)
    db.session.commit()

    print('Done Seeding!')