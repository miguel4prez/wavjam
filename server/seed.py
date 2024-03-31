from random import randint, choice as rc
from datetime import datetime, timezone

# current_time = datetime.now()

from app import app
from models import db, User, Post, SongData, Tag

def create_user():
  users = []

  first_user = User(
    username ="The Pheonix Within",
    email='text@gmail.com',
    country='US',
    state='NY',
    city='Queens',
    genre ="Rock",
    image = "523b096ea621f.image.jpg",
    biography ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  first_user.password_hash = 'test'

  second_user = User(
    username ="Drake",
    email='text@gmail.com',
    country='CA',
    state='ON',
    city='Toronto',
    genre ="Rap",
    image = "Drake-1536x1024.jpeg",
    biography ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  second_user.password_hash = 'test'

  third_user = User(
    username = "Red Hot Chili Peppers",
    email='text@gmail.com',
    country='US',
    state='CA',
    city='Los Angeles',
    genre ="Rock",
    image = "11106940-large.jpeg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  third_user.password_hash = 'test'

  fourth_user = User (
    username = "Yame",
    email='text@gmail.com',
    country='FR',
    state='',
    city='Paris',
    genre = "R&B",
    image = "COLORSxSTUDIOS_Announcement_Yame-800x1000.jpeg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  fourth_user.password_hash = 'test'

  fifth_user = User (
    username = "Ronx",
    email='text@gmail.com',
    country='US',
    state='NY',
    city='Bronx',
    genre = "Pop-Punk",
    image = "Ronx.jpeg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  fifth_user.password_hash = 'test'

  sixth_user = User (
    username = "Pinegrove",
    email='text@gmail.com',
    country='US',
    state='NJ',
    city='Montclair',
    genre = "Rock",
    image = "pinegrove.jpeg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  sixth_user.password_hash = 'test'

  seventh_user = User (
    username = "Currents",
    email='text@gmail.com',
    country='US',
    state='CT',
    city='Newtown',
    genre = "Metalcore",
    image = "unnamed-20.png",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  seventh_user.password_hash = 'test'

  eigth_user = User (
    username = "Noah Kahan",
    email='text@gmail.com',
    country='US',
    state='VT',
    city='Strafford',
    genre = "Folk-Pop",
    image = "web.ae_.noahkahan.qa_.A.jpg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  eigth_user.password_hash = 'test'

  ninth_user = User (
    username = "mouse on the keys",
    email='text@gmail.com',
    country='JP',
    state='JP',
    city='Tokyo',
    genre = "Mathrock",
    image = "motk-fo-scaled.jpeg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  ninth_user.password_hash = 'test'

  tenth_user = User (
    username = "Dustin Lynch",
    email='text@gmail.com',
    country='US',
    state='TN',
    city='Tullahoma',
    genre = "Country",
    image = "Dustin-Lynch.jpeg",
    biography = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  tenth_user.password_hash = 'test'

  eleventh_user = User(
    username="Mariya",
    email='mariya@email.com',
    country='RU',
    state='',
    city='Moscow',
    genre="Rnb",
    image="",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  eleventh_user.password_hash = 'test'

  twelfth_user = User(
    username="Peso Pluma",
    email='pesopluma@email.com',
    country='MX',
    state='CMX',
    city='Mexico City',
    genre="Latin",
    image="Peso-Pluma-457x420.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  twelfth_user.password_hash = 'test'

  thirteenth_user = User(
    username="Grayscale",
    email='sofia@email.com',
    country='US',
    state='PA',
    city='Philadelphia',
    genre="Pop",
    image="0007072115_10.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  thirteenth_user.password_hash = 'test'

  fourteenth_user = User(
    username="Beachsmoke",
    email='beachsmoke@email.com',
    country='ES',
    state='',
    city='Madrid',
    genre="Rap",
    image="IMG_1953 2.JPG",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  fourteenth_user.password_hash = 'test'

  fifteenth_user = User(
    username="Yuki",
    email='yuki@email.com',
    country='JP',
    state='TKY',
    city='Tokyo',
    genre="Indie",
    image="Beabadoobee.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  fifteenth_user.password_hash = 'test'
  sixteenth_user = User(
    username="Autumn Revival",
    email='autumnrevival@email.com',
    country='US',
    state='NY',
    city='Bronx',
    genre="Alternative",
    image="146941790_899729717449857_5651104441851700702_n.jpg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  sixteenth_user.password_hash = 'test'

  seventeenth_user = User(
    username="Keshi",
    email='lila@email.com',
    country='US',
    state='TX',
    city='Houston',
    genre="lofi",
    image="2d224d63c1dbdf69f0488093ca1bb22c_1000x1000x1-900x900.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  seventeenth_user.password_hash = 'test'

  eighteenth_user = User(
    username="Jean Massey",
    email='jean@email.com',
    country='IT',
    state='',
    city='Venice',
    genre="EDM",
    image="ab6761610000e5eb32aaf613f72158528f92f7f4.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  eighteenth_user.password_hash = 'test'

  nineteenth_user = User(
    username="Wherewaswayne",
    email='www@email.com',
    country='US',
    state='NY',
    city='Bronx',
    genre="Afro",
    image="IMG_7274.jpg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  nineteenth_user.password_hash = 'test'

  twentieth_user = User(
    username="Balcony Talk",
    email='BT@email.com',
    country='US',
    state='NY',
    city='Queens',
    genre="Alternative",
    image="IMG_7275.jpg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  twentieth_user.password_hash = 'test'

  twenty_first_user = User(
    username="Gustavo Lima",
    email='megustavo@email.com',
    country='BR',
    state='',
    city='Sao Paulo',
    genre="Latin",
    image="th.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  twenty_first_user.password_hash = 'test'

  twenty_second_user = User(
    username="Karol G",
    email='KG@email.com',
    country='CO',
    state='',
    city='Medellin',
    genre="Latin",
    image="Karol-G-Wallpapers-Insta-Fit-Bio-8.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  twenty_second_user.password_hash = 'test'

  twenty_third_user = User(
    username="Tate Mcrae",
    email='TateM@email.com',
    country='CA',
    state='AB',
    city='Calgary',
    genre="Pop",
    image="tate-mcrae-08-13-2021-44.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  twenty_third_user.password_hash = 'test'

  twenty_fourth_user = User(
    username="Shreya Ghoshal",
    email='SG@email.com',
    country='IN',
    state='West Bengal',
    city='Murshidabad',
    genre="Classical",
    image="6740ea4dd2269b906697cbeb03c40e68.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  twenty_fourth_user.password_hash = 'test'

  twenty_fifth_user = User(
    username="5sos",
    email='5SOS@email.com',
    country='AU',
    state='NSW',
    city='Sydney',
    genre="Pop-Rock",
    image="5SOS_LEADPRESS_AndyDeLuca-scaled.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  twenty_fifth_user.password_hash = 'test'

  twenty_sixth_user = User(
    username="Matteo",
    email='matteo@email.com',
    country='IT',
    state='',
    city='Florence',
    genre="House",
    image="maxresdefault.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  twenty_sixth_user.password_hash = 'test'

  twenty_seventh_user = User(
    username="Luke Combs",
    email='LC@email.com',
    country='US',
    state='TN',
    city='Nashville',
    genre="Folk",
    image="luke-combs.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Artist'
  )

  twenty_seventh_user.password_hash = 'test'

  twenty_eighth_user = User(
    username="Grupo Frontera",
    email='GF@email.com',
    country='US',
    state='TX',
    city='Edinburg',
    genre="Latin",
    image="8f831ffd-67b0-4dee-a2a5-63b54aaeeebe.jpeg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Band'
  )

  twenty_eighth_user.password_hash = 'test'

  twenty_ninth_user = User(
    username="TaTo",
    email='hana@email.com',
    country='US',
    state='CA',
    city='Los Angeles',
    genre="EDM",
    image="IMG_7276.jpg",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  twenty_ninth_user.password_hash = 'test'

  thirtieth_user = User(
    username="Leon",
    email='leon@email.com',
    country='DE',
    state='',
    city='Berlin',
    genre="EDM",
    image="",
    biography="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cursus sit amet dictum sit amet justo. Magna eget est lorem ipsum dolor sit. Semper viverra nam libero justo laoreet sit.",
    type='Musician'
  )

  thirtieth_user.password_hash = 'test'

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
  users.append(eleventh_user)
  users.append(twelfth_user)
  users.append(thirteenth_user)
  users.append(fourteenth_user)
  users.append(fifteenth_user)
  users.append(sixteenth_user)
  users.append(seventeenth_user)
  users.append(eighteenth_user)
  users.append(nineteenth_user)
  users.append(twentieth_user)
  users.append(twenty_first_user)
  users.append(twenty_second_user)
  users.append(twenty_third_user)
  users.append(twenty_fourth_user)
  users.append(twenty_fifth_user)
  users.append(twenty_sixth_user)
  users.append(twenty_seventh_user)
  users.append(twenty_eighth_user)
  users.append(twenty_ninth_user)
  users.append(thirtieth_user)

  return users


def create_post():
  current_time = datetime.now(timezone.utc)
  posts = []

  first_post = Post(
    description="Acoustic Jam Session at the Local Coffee House",
    details='Exploring The Great Gatsby vibes with fellow musicians. New talents welcome. Bring your acoustic instruments. Location: Brews & Tunes Cafe.',
    time_posted=current_time.isoformat(),
    user_id=1
  )

  second_post = Post(
    description='Forming a Funky Band for Chicago Grooves',
    details='Must be 21+, Have a car, Feel the rhythm of the Chicago music scene, and bring your funk. Good sense of humor required.',
    time_posted=current_time.isoformat(),
    user_id=2
  )

  third_post = Post(
    description="Music-Loving Roommate Wanted",
    details='Must be pet-friendly, No smoking. Keep it tidy. Bonus if you play an instrument or enjoy late-night jam sessions.',
    time_posted=current_time.isoformat(),
    user_id=3
  )

  fourth_post = Post(
    description="City Park Serenade: All Music Skill Levels Welcome",
    details='Join our musical hike. Bring your instrument, snacks, and let the music flow. Rain or shine event at City Park.',
    time_posted=current_time.isoformat(),
    user_id=4
  )

  fifth_post = Post(
    description="Morning Runs with a Musical Beat",
    details='Central Park is our stage. All fitness levels encouraged. Running playlist curated. Bring your own water bottle and rhythm.',
    time_posted=current_time.isoformat(),
    user_id=5
  )

  sixth_post = Post(
    description="Capturing Musical Moments: Need a Photographer?",
    details="Indie rockers wanted for a basement studio photoshoot. BYOI (Bring Your Own Instrument) and let's create visual harmony.",
    time_posted=current_time.isoformat(),
    user_id=6
  )

  seventh_post = Post(
    description="Coding Beats Meetup: Unleash Your Musical Algorithms",
    details="Open to all programming languages with a musical twist. Bring your laptop, tech hub vibes, and network with music-minded coders.",
    time_posted=current_time.isoformat(),
    user_id=7
  )

  eighth_post = Post(
    description="Italian Culinary Symphony: Limited Spots Available",
    details="Cooking class with an Italian twist. Limited spots. Join this culinary musical journey at the Culinary School. Ingredients provided.",
    time_posted=current_time.isoformat(),
    user_id=8
  )

  ninth_post = Post(
    description="Painting Workshop: Expressing Art through Music",
    details="No experience required. Create art to the sound of local musicians. Art supplies provided. Location: Art Studio.",
    time_posted=current_time.isoformat(),
    user_id=9
  )

  tenth_post = Post(
    description="Online Gaming Night with Musical Vibes",
    details="Platform: PC, Game: Among Us. Join our virtual musical space at 7:00 PM - 10:00 PM. Discord server link provided.",
    time_posted=current_time.isoformat(),
    user_id=10
  )

  eleventh_post = Post(
    description="Chill Beats for a Cozy Evening: Sharing my Latest Lo-fi Track",
    details='Check out my latest lo-fi instrumental track. Dive into the cozy musical atmosphere and share your thoughts!',
    time_posted=current_time.isoformat(),
    user_id=11
  )

  twelfth_post = Post(
    description='Late-night Jam Thoughts',
    details='Reflecting on life and the rhythmic beats of music. Anyone else up for a jam session discussion?',
    time_posted=current_time.isoformat(),
    user_id=12
  )

  sixteenth_post = Post(
    description="Nature's Musical Muse",
    details='Nature walks always inspire my melodies. How does nature influence your musical journey?',
    time_posted=current_time.isoformat(),
    user_id=16
  )

  seventeenth_post = Post(
    description='Late-night Beat Crafting',
    details='Creating atmospheric beats in the quiet of the night. Dive into my latest track and feel the nocturnal rhythm!',
    time_posted=current_time.isoformat(),
    user_id=17
  )

  eighteenth_post = Post(
    description="Rocking Studio Jam",
    details='Jamming with the band in the studio. Get ready for some rocking vibes as we craft new music!',
    time_posted=current_time.isoformat(),
    user_id=18
  )

  nineteenth_post = Post(
    description="Jazz Exploration in Progress",
    details='Currently experimenting with avant-garde jazz compositions. Excited to share this musical journey soon!',
    time_posted=current_time.isoformat(),
    user_id=19
  )

  twentieth_post = Post(
    description='Country Harmony in the Making',
    details='Putting together a new country song. Searching for collaborators who resonate with the country genre!',
    time_posted=current_time.isoformat(),
    user_id=20
  )

  twenty_fifth_post = Post(
    description="World Music Fusion Exploration",
    details='Diving into the diverse world of music fusion. Blending influences for a unique sonic experience!',
    time_posted=current_time.isoformat(),
    user_id=25
  )

  twenty_sixth_post = Post(
    description='Chill Vibes and Acoustic Sessions',
    details='Unwinding with laid-back acoustic sessions. Join me for a musical journey filled with chill vibes!',
    time_posted=current_time.isoformat(),
    user_id=26
  )

  twenty_seventh_post = Post(
    description="Gearing Up for a Metalcore Blast",
    details='Prepping for an intense metalcore session. Metalheads, unite! Get ready for a sonic metalcore experience!',
    time_posted=current_time.isoformat(),
    user_id=27
  )

  posts.append(first_post)
  posts.append(second_post)
  posts.append(third_post)
  posts.append(fourth_post)
  posts.append(fifth_post)
  posts.append(sixth_post)
  posts.append(seventh_post)
  posts.append(eighth_post)
  posts.append(ninth_post)
  posts.append(tenth_post)
  posts.append(eleventh_post)
  posts.append(twelfth_post)
  posts.append(sixteenth_post)
  posts.append(seventeenth_post)
  posts.append(eighteenth_post)
  posts.append(nineteenth_post)
  posts.append(twentieth_post)
  posts.append(twenty_fifth_post)
  posts.append(twenty_sixth_post)
  posts.append(twenty_seventh_post)

  return posts

def create_song_data():
  song_data = []

  first_song = SongData(
    title='Abuso',
    song_url='example.mp3',
    user_id= 1
  )
  second_song = SongData(
    title='Take Care',
    song_url='Cloudy_Sleeze_Stereo_mix_WAV.wav',
    user_id= 2
  )
  third_song = SongData(
    title='Californication',
    song_url='example.mp3',
    user_id= 3
  )
  fourth_song = SongData(
    title='Becane',
    song_url='New_Wave_-_beachsmoke_ft._DBC_Mix_2.wav',
    user_id= 4
  )
  fifth_song = SongData(
    title='Roses',
    song_url='Cloudy_Sleeze_Stereo_mix_WAV.wav',
    user_id= 5
  )
  sixth_song = SongData(
    title='Need 2',
    song_url='New_Wave_-_beachsmoke_ft._DBC_Mix_2.wav',
    user_id= 6
  )
  seventh_song = SongData(
    title="Thinking 'Bout You",
    song_url='example.mp3',
    user_id= 7
  )
  eigth_song = SongData(
    title='Better Days',
    song_url='example.mp3',
    user_id= 8
  )
  ninth_song = SongData(
    title='Dial Drunk',
    song_url='Cloudy_Sleeze_Stereo_mix_WAV.wav',
    user_id= 9
  )
  tenth_song = SongData(
    title='aom',
    song_url='New_Wave_-_beachsmoke_ft._DBC_Mix_2.wav',
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
    Tag(tag_name='Band', user_id=1),
    Tag(tag_name='Punk', user_id=1),
    Tag(tag_name='Raw', user_id=1),
    Tag(tag_name='lyrical', user_id=1),
  ]
  tags_second = [
    Tag(tag_name='Rap', user_id=2),
    Tag(tag_name='Lyrical', user_id=2),
    Tag(tag_name='Timeless', user_id=2),
    Tag(tag_name='Soulful', user_id=2),
    Tag(tag_name='Raw', user_id=2),
  ]
  tags_third = [
    Tag(tag_name='Emo', user_id=3),
    Tag(tag_name='Rock', user_id=3),
    Tag(tag_name='Raw', user_id=3),
    Tag(tag_name='Lyrical', user_id=3),
    Tag(tag_name='Upbeat', user_id=3),
  ]
  tags_fourth = [
    Tag(tag_name='Lyrical', user_id=4),
    Tag(tag_name='Rap', user_id=4),
    Tag(tag_name='Rnb', user_id=4),
    Tag(tag_name='Melodic', user_id=4),
    Tag(tag_name='Freestyle', user_id=4),
  ]
  tags_fifth = [
    Tag(tag_name='Pop-rock', user_id=5),
    Tag(tag_name='Punk', user_id=5),
    Tag(tag_name='Band', user_id=5),
    Tag(tag_name='Rock', user_id=5),
    Tag(tag_name='Afro', user_id=5),
  ]
  tags_sixth = [
    Tag(tag_name='Emo', user_id=6),
    Tag(tag_name='Pop', user_id=6),
    Tag(tag_name='Acoustic', user_id=6),
    Tag(tag_name='Band', user_id=6),
    Tag(tag_name='Pop-rock', user_id=6)
  ]
  tags_seventh = [
    Tag(tag_name='Rock', user_id=7),
    Tag(tag_name='Metal', user_id=7),
    Tag(tag_name='Band', user_id=7),
    Tag(tag_name='Melodic', user_id=7),
    Tag(tag_name='Grunge', user_id=7)
  ]
  tags_eigth = [
    Tag(tag_name='Ready to join a band', user_id=8),
    Tag(tag_name='Pop', user_id=8),
    Tag(tag_name='Acoustic', user_id=8),
    Tag(tag_name='Vocal', user_id=8),
    Tag(tag_name='Lyrical', user_id=8)
  ]
  tags_ninth = [
    Tag(tag_name='Instrumental', user_id=9),
    Tag(tag_name='Band', user_id=9),
    Tag(tag_name='Captivating', user_id=9),
    Tag(tag_name='Groovy', user_id=9),
    Tag(tag_name='Upbeat', user_id=9)
  ]
  tags_tenth = [
    Tag(tag_name='Ready to join a band', user_id=10),
    Tag(tag_name='Country', user_id=10),
    Tag(tag_name='Acoustic', user_id=10),
    Tag(tag_name='Vocal', user_id=10),
    Tag(tag_name='Lyrical', user_id=10)
  ]
  tags_eleventh = [
    Tag(tag_name='Lofi', user_id=11),
    Tag(tag_name='Guitarist', user_id=11),
    Tag(tag_name='Bassist', user_id=11),
    Tag(tag_name='Drummer', user_id=11),
    Tag(tag_name='Dark', user_id=11),
  ]

  tags_twelfth = [
    Tag(tag_name='Pop', user_id=12),
    Tag(tag_name='Drill', user_id=12),
    Tag(tag_name='Rap', user_id=12),
    Tag(tag_name='Hiphop', user_id=12),
    Tag(tag_name='RnB', user_id=12),
  ]

  tags_thirteenth = [
    Tag(tag_name='Afro', user_id=13),
    Tag(tag_name='Emotional', user_id=13),
    Tag(tag_name='Melodic', user_id=13),
    Tag(tag_name='Freestyle', user_id=13),
    Tag(tag_name='Hyperpop', user_id=13),
  ]
  tags_fourteenth = [
    Tag(tag_name='Band', user_id=14),
    Tag(tag_name='Collab', user_id=14),
    Tag(tag_name='Soul', user_id=14),
    Tag(tag_name='Musician', user_id=14),
    Tag(tag_name='Artist', user_id=14),
  ]

  tags_fifteenth = [
    Tag(tag_name='Instrumental', user_id=15),
    Tag(tag_name='Ready to join band', user_id=15),
    Tag(tag_name='Lofi', user_id=15),
    Tag(tag_name='Guitarist', user_id=15),
    Tag(tag_name='Bassist', user_id=15),
  ]
  tags_sixteenth = [
    Tag(tag_name='Keyboardist', user_id=16),
    Tag(tag_name='Electronic', user_id=16),
    Tag(tag_name='Ambient', user_id=16),
    Tag(tag_name='Indie', user_id=16),
    Tag(tag_name='Rock', user_id=16),
  ]
  tags_seventeenth = [
    Tag(tag_name='Metal', user_id=17),
    Tag(tag_name='Country', user_id=17),
    Tag(tag_name='Reggae', user_id=17),
    Tag(tag_name='Jazz', user_id=17),
    Tag(tag_name='Classical', user_id=17),
  ]
  tags_eighteenth = [
    Tag(tag_name='Experimental', user_id=18),
    Tag(tag_name='Chill', user_id=18),
    Tag(tag_name='Funk', user_id=18),
    Tag(tag_name='Trap', user_id=18),
    Tag(tag_name='Dance', user_id=18),
  ]

  tags_nineteenth = [
    Tag(tag_name='Folk', user_id=19),
    Tag(tag_name='Acoustic', user_id=19),
    Tag(tag_name='Singer-songwriter', user_id=19),
    Tag(tag_name='Punk', user_id=19),
    Tag(tag_name='Alternative', user_id=19),
  ]
  tags_twentieth = [
    Tag(tag_name='Grunge', user_id=20),
    Tag(tag_name='Synthwave', user_id=20),
    Tag(tag_name='EDM', user_id=20),
    Tag(tag_name='Pop-rock', user_id=20),
    Tag(tag_name='Blues', user_id=20),
  ]

  tags_twenty_first = [
    Tag(tag_name='Latin', user_id=21),
    Tag(tag_name='House', user_id=21),
    Tag(tag_name='Techno', user_id=21),
    Tag(tag_name='Psychedelic', user_id=21),
    Tag(tag_name='Orchestral', user_id=21),
  ]
  tags_twenty_second = [
    Tag(tag_name='Progressive', user_id=22),
    Tag(tag_name='Trance', user_id=22),
    Tag(tag_name='Ska', user_id=22),
    Tag(tag_name='Instrumentals-only', user_id=22),
    Tag(tag_name='Fusion', user_id=22),
  ]

  tags_twenty_third = [
    Tag(tag_name='Chiptune', user_id=23),
    Tag(tag_name='Ambient-electronica', user_id=23),
    Tag(tag_name='Soulful', user_id=23),
    Tag(tag_name='Groovy', user_id=23),
    Tag(tag_name='Nostalgic', user_id=23),
  ]
  tags_twenty_fourth = [
    Tag(tag_name='Inspiring', user_id=24),
    Tag(tag_name='Vibrant', user_id=24),
    Tag(tag_name='Mellow', user_id=24),
    Tag(tag_name='Powerful', user_id=24),
    Tag(tag_name='Ambient-pop', user_id=24),
  ]

  tags_twenty_fifth = [
    Tag(tag_name='Modern', user_id=25),
    Tag(tag_name='Retro', user_id=25),
    Tag(tag_name='Up-and-coming', user_id=25),
    Tag(tag_name='Vocalist', user_id=25),
    Tag(tag_name='Lyrical', user_id=25),
  ]
  tags_twenty_sixth = [
    Tag(tag_name='Chill-hop', user_id=26),
    Tag(tag_name='Classy', user_id=26),
    Tag(tag_name='Trippy', user_id=26),
    Tag(tag_name='Dream-pop', user_id=26),
    Tag(tag_name='Bedroom-pop', user_id=26),
  ]

  tags_twenty_seventh = [
    Tag(tag_name='Electro-soul', user_id=27),
    Tag(tag_name='Funky', user_id=27),
    Tag(tag_name='Mystical', user_id=27),
    Tag(tag_name='Acapella', user_id=27),
    Tag(tag_name='Sensual', user_id=27),
  ]
  tags_twenty_eighth = [
    Tag(tag_name='Nostalgia', user_id=28),
    Tag(tag_name='Haunting', user_id=28),
    Tag(tag_name='Urban', user_id=28),
    Tag(tag_name='Indietronica', user_id=28),
    Tag(tag_name='Acoustic-pop', user_id=28),
  ]

  tags_twenty_ninth = [
    Tag(tag_name='World-beat', user_id=29),
    Tag(tag_name='Psychedelic-rock', user_id=29),
    Tag(tag_name='Spacey', user_id=29),
    Tag(tag_name='Folk-pop', user_id=29),
    Tag(tag_name='Industrial', user_id=29),
  ]
  tags_thirtieth = [
    Tag(tag_name='Laid-back', user_id=30),
    Tag(tag_name='Futuristic', user_id=30),
    Tag(tag_name='Sophisticated', user_id=30),
    Tag(tag_name='Gritty', user_id=30),
    Tag(tag_name='Uplifting', user_id=30),
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
  tags.extend(tags_eleventh)
  tags.extend(tags_twelfth)
  tags.extend(tags_thirteenth)
  tags.extend(tags_fourteenth)
  tags.extend(tags_fifteenth)
  tags.extend(tags_sixteenth)
  tags.extend(tags_seventeenth)
  tags.extend(tags_eighteenth)
  tags.extend(tags_nineteenth)
  tags.extend(tags_twentieth)
  tags.extend(tags_twenty_first)
  tags.extend(tags_twenty_second)
  tags.extend(tags_twenty_third)
  tags.extend(tags_twenty_fourth)
  tags.extend(tags_twenty_fifth)
  tags.extend(tags_twenty_sixth)
  tags.extend(tags_twenty_seventh)
  tags.extend(tags_twenty_eighth)
  tags.extend(tags_twenty_ninth)
  tags.extend(tags_thirtieth)

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
