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

Card.create(
  name: "Charizard",
  description: "Base set - 4/102: Holographic Charizard from the original Pokemon card set",
  condition: "Mint",
  price: 500.00,
  quantity: 2,
  genre: "Pokemon",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8SaVlC1-vPxZDHBVEAEzaOTmpijXM6ewxzg&usqp=CAU"
)

Card.create(
  name: "Mike Trout",
  description: "Mike Trout rookie card - Topps",
  condition: "Near Mint",
  price: 145.00,
  quantity: 3,
  genre: "Baseball",
  image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg5GN2sxtu9XcPXBLMCTHDnwL06BYrO26HB5p9aVoezph49pI9kh5vvQZr2fZT3B68_tc&usqp=CAU"
)

