# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

andrew = User.create(
  first_name: "Andrew",
  last_name: "Dewhirst",
  email: "andrew@example.com",
  birthday: "07/01/2000",
  username: "adewhirst",
  password: "password",
  password_confirmation: "password"
)

andrew.avatar.attach(
  io: File.open('./public/avatars/kid.png'),
  filename: 'kid.png',
  content_type: 'application/png'
)

charizard = Card.create(
  name: "Charizard",
  description: "Base set - 4/102: Holographic Charizard from the original Pokemon card set",
  condition: "Mint",
  price: 500.00,
  quantity: 2
)

charizard.card_pic.attach(
  io: File.open('./public/card_pics/charizard.png'),
  filename: 'charizard.png',
  content_type: 'application/png'
)
