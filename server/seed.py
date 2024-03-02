from random import randint, choice as rc
from sqlalchemy import DateTime

from app import app
from models import db, User, Post, SongData, Tag

def create_user():
  users = []

  first_user = User(
    username ="The Pheonix Within",
    _password_hash="test",
    genre ="Rock",
    image = "https://bloximages.chicago2.vip.townnews.com/qchron.com/content/tncms/assets/v3/editorial/5/7b/57b90b44-d695-5e72-9dc3-323972f02c63/523b096ea621f.image.jpg?resize=760%2C574",
    biography ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location ="Queens, NY",
    country ="US",
    type='Band'
  )
  second_user = User(
    username ="Drake",
    _password_hash="test",
    genre ="Rap",
    image = "https://thexplorion.com/wp-content/uploads/2020/09/Drake-1536x1024.jpg",
    biography ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location ="Toronto, Canada",
    country ="CA",
    type='Artist'
  )
  third_user = User(
    username = "Red Hot Chili Peppers",
    _password_hash="test",
    genre ="Rock",
    image = "http://media.cleveland.com/popmusic_impact/photo/11106940-large.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Los Angeles, CA",
    country = "US",
    type='Band'
  )
  fourth_user = User (
    username = "Yame",
    _password_hash="test",
    genre = "R&B",
    image = "https://core.colorsxstudios.com/wp-content/uploads/2023/05/COLORSxSTUDIOS_Announcement_Yame-800x1000.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Paris, France",
    country = "FR",
    type='Artist'
  )
  fifth_user = User (
    username = "Ronx",
    _password_hash="test",
    genre = "Pop-Punk",
    image = "https://framethestage.com/wp-content/uploads/2019/12/Ronx.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Bronx, NY",
    country = "US",
    type='Band'
  )
  sixth_user = User (
    username = "Pinegrove",
    _password_hash="test",
    genre = "Rock",
    image = "https://chorus.fm/wp-content/uploads/2016/04/pinegrove.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Montclair, New Jersey",
    country = "US",
    type='Band'
  )
  seventh_user = User (
    username = "Currents",
    _password_hash="test",
    genre = "Metalcore",
    image = "https://atomsplitterpr.com/wp-content/uploads/2020/04/unnamed-20.png",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Newtown, Conneticut",
    country = "US",
    type='Band'
  )
  eigth_user = User (
    username = "Noah Kahan",
    _password_hash="test",
    genre = "Folk-Pop",
    image = "https://wp.dailybruin.com/images/2021/09/web.ae_.noahkahan.qa_.A.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Strafford, Vermont",
    country = "US",
    type='Musician'
  )
  ninth_user = User (
    username = "mouse on the keys",
    _password_hash="test",
    genre = "Mathrock",
    image = "https://a-girafe.com/wp-content/uploads/2020/06/motk-fo-scaled.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Tokyo, Japan",
    country = "JP",
    type='Band'
  )
  tenth_user = User (
    username = "Dustin Lynch",
    _password_hash="test",
    genre = "Country",
    image = "https://www.totalntertainment.com/wp-content/uploads/Dustin-Lynch.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    location = "Tullahoma, Tennessee",
    country = "US",
    type='Musician'
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

def create_post():
  posts = []

  first_post = Post(
    description="This is a test",
    details='Discussing The Great Gatsby, New members welcome, BYOB (Bring Your Own Book), Location: Local coffee shop',
    time_posted="30 mins ago",
    user_id = 1
  )
  second_post = Post(
    description='Book club meeting',
    details='Must be 21+, Need to have a car, Must be from the Chicago area, Must Have a good sense of humor',
    time_posted="10 mins ago",
    user_id = 2
  )
  third_post = Post(
    description="Looking for a roommate",
    details='Must be pet-friendly, No smoking allowed Must be tidy and organized, Preferably a morning person',
    time_posted="1 hour ago",
    user_id = 3
  )
  fourth_post = Post(
    description="Hiking group meetup",
    details='All skill levels welcome, Bring your own snacks, Meeting point: City Park Rain or shine event',
    time_posted="2 days ago",
    user_id = 4
  )
  fifth_post = Post(
    description="Running group",
    details='Morning runs on weekdays, Meeting point: Central Park, All fitness levels encouraged, Bring your own water bottle',
    time_posted="2s ago",
    user_id = 5
  )
  sixth_post = Post(
    description="Anyone need a photographer?",
    details="Musicians wanted, Genre: Indie rock, Location: Basement Studio, BYOI (Bring Your Own Instrument)",
    time_posted="2s ago",
    user_id = 6
  )
  seventh_post = Post(
    description="Coding meetup",
    details="Open to all programming languages, Bring your laptop, Location: Tech Hub, Networking opportunities",
    time_posted="40 mins ago",
    user_id = 7
  )
  eigth_post = Post(
    description="Cooking class",
    details="Cuisine: Italian, Limited spots available, Location: Culinary School, Ingredients provided",
    time_posted="40 mins ago",
    user_id = 8
  )
  ninth_post = Post(
    description="Painting workshop",
    details="No experience required, All art supplies provided, Location: Art Studio, Guided session by local artist",
    time_posted="30 mins ago",
    user_id = 9
  )
  tenth_post = Post(
    description="Online gaming night",
    details="Platform: PC, Game: Among Us, Time: 7:00 PM - 10:00 PM,Discord server link provided",
    time_posted="10 mins ago",
    user_id = 10
  )

  posts.append(first_post)
  posts.append(second_post)
  posts.append(third_post)
  posts.append(fourth_post)
  posts.append(fifth_post)
  posts.append(sixth_post)
  posts.append(seventh_post)
  posts.append(eigth_post)
  posts.append(ninth_post)
  posts.append(tenth_post)

  return posts

def create_song_data():
  song_data = []

  first_song = SongData(
    title='Abuso',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 1
  )
  second_song = SongData(
    title='Take Care',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 2
  )
  third_song = SongData(
    title='Californication',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 3
  )
  fourth_song = SongData(
    title='Becane',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 4
  )
  fifth_song = SongData(
    title='Roses',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 5
  )
  sixth_song = SongData(
    title='Need 2',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 6
  )
  seventh_song = SongData(
    title="Thinking 'Bout You",
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 7
  )
  eigth_song = SongData(
    title='Better Days',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 8
  )
  ninth_song = SongData(
    title='Dial Drunk',
    song_url='https://www.computerhope.com/jargon/m/example.mp3',
    user_id= 9
  )
  tenth_song = SongData(
  title='aom',
  song_url='https://www.computerhope.com/jargon/m/example.mp3',
  user_id= 10
  )

  song_data.append(first_song)
  song_data.append(second_song)
  song_data.append(third_song)
  song_data.append(fourth_song)
  song_data.append(fifth_song)
  song_data.append(sixth_song)
  song_data.append(seventh_song)
  song_data.append(eigth_song)
  song_data.append(ninth_song)
  song_data.append(tenth_song) 

  return song_data

def create_tags():
  tags = []

  tags_first = [
    Tag(tag_name='Emo', user_id=1),
    Tag(tag_name='Facemelter', user_id=1)
  ]
  tags_second = [
    Tag(tag_name='MGK', user_id=2)
  ]
  tags_third = [
    Tag(tag_name='Emo', user_id=3),
    Tag(tag_name='Facemelter', user_id=3)
  ]
  tags_fourth = [
    Tag(tag_name='MGK', user_id=4)
  ]
  tags_fifth = [
    Tag(tag_name='MGK', user_id=5),
    Tag(tag_name='Blink182', user_id=5),
    Tag(tag_name='Suecio', user_id=5)
  ]
  tags_sixth = [
    Tag(tag_name='Emo', user_id=6),
    Tag(tag_name='Facemelter', user_id=6)
  ]
  tags_seventh = [
    Tag(tag_name='MGK', user_id=7),
    Tag(tag_name='Lil Uzi Vert', user_id=7)
  ]
  tags_eigth = [
    Tag(tag_name='Emo', user_id=8),
    Tag(tag_name='Facemelter', user_id=8)
  ]
  tags_ninth = [
    Tag(tag_name='Emo', user_id=9)
  ]
  tags_tenth = [
    Tag(tag_name='Facemelter', user_id=10)
  ]

  tags.extend(tags_first)
  tags.extend(tags_second)
  tags.extend(tags_third)
  tags.extend(tags_fourth)
  tags.extend(tags_fifth)
  tags.extend(tags_sixth)
  tags.extend(tags_seventh)
  tags.extend(tags_eigth)
  tags.extend(tags_ninth)
  tags.extend(tags_tenth)

  return tags

  
if __name__ == "__main__":
  with app.app_context():
    print('Clearing db..')
    User.query.delete()
    Post.query.delete()
    SongData.query.delete()
    Tag.query.delete()
    
    print('Seeding users...')
    users = create_user()
    for user in users:
        db.session.add(user)
    db.session.commit()

    posts = create_post()
    for post in posts:
        db.session.add(post)
    db.session.commit()

    song_data = create_song_data()
    for data in song_data:
        db.session.add(data)
    db.session.commit()

    tags = create_tags()
    for tag in tags:
       db.session.add(tag)
    db.session.commit()

    print('Done Seeding!')
