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

john = User.create(
  first_name: "John",
  last_name: "Doe",
  email: "john@example.com",
  birthday: "07/02/2000",
  username: "jdoe",
  password: "password",
  password_confirmation: "password"
)

john.avatar.attach(
  io: File.open('./public/avatars/kid_1.png'),
  filename: 'kid_1.png',
  content_type: 'application/png'
)

Card.create(
  name: "Alakazam",
  description: "Base set - 1/102",
  condition: "Near Mint",
  price: 110,
  quantity: 10,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Alakazam.BS.1.png"
)

Card.create(
  name: "Blastoise",
  description: "Base set - 2/102",
  condition: "Mint",
  price: 265,
  quantity: 4,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Blastoise.BS.2.png"
) 

Card.create(
  name: "Chansey",
  description: "Base set - 3/102",
  condition: "Lightly Played",
  price: 45,
  quantity: 12,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Chansey.BS.3.png"
) 

Card.create(
  name: "Charizard",
  description: "Base set - 4/102",
  condition: "Mint",
  price: 500,
  quantity: 3,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Charizard.BS.4.png"
) 

Card.create(
  name: "Clefairy",
  description: "Base set - 5/102",
  condition: "Heavily Played",
  price: 25,
  quantity: 21,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Clefairy.BS.5.png"
) 

Card.create(
  name: "Gyarados",
  description: "Base set - 6/102",
  condition: "Damaged",
  price: 10,
  quantity: 35,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Gyarados.BS.6.png"
) 

Card.create(
  name: "Hitmonchan",
  description: "Base set - 7/102",
  condition: "Near Mint",
  price: 65,
  quantity: 11,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Hitmonchan.BS.7.png"
) 

Card.create(
  name: "Machamp",
  description: "Base set - 8/102",
  condition: "Mint",
  price: 105,
  quantity: 7,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Machamp.BS.8.png"
) 

Card.create(
  name: "Magneton",
  description: "Base set - 9/102",
  condition: "Mint",
  price: 165,
  quantity: 6,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Magneton.BS.9.png"
) 

Card.create(
  name: "Mewtwo",
  description: "Base set - 10/102",
  condition: "Lightly Played",
  price: 55,
  quantity: 18,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Mewtwo.BS.10.png"
) 

Card.create(
  name: "Nidoking",
  description: "Base set - 11/102",
  condition: "Mint",
  price: 120,
  quantity: 2,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Nidoking.BS.11.png"
) 

Card.create(
  name: "Ninetails",
  description: "Base set - 12/102",
  condition: "Damaged",
  price: 15,
  quantity: 28,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Ninetales.BS.12.png"
) 

Card.create(
  name: "Poliwrath",
  description: "Base set - 13/102",
  condition: "Near Mint",
  price: 80,
  quantity: 9,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Poliwrath.BS.13.png"
) 

Card.create(
  name: "Raichu",
  description: "Base set - 14/102",
  condition: "Mint",
  price: 195,
  quantity: 7,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Raichu.BS.14.png"
) 

Card.create(
  name: "Venusaur",
  description: "Base set - 15/102",
  condition: "Mint",
  price: 225,
  quantity: 8,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Venusaur.BS.15.png"
) 

Card.create(
  name: "Zapdos",
  description: "Base set - 16/102",
  condition: "Heavily Played",
  price: 40,
  quantity: 15,
  genre: "Pokemon",
  image: "https://den-cards.pokellector.com/119/Zapdos.BS.16.png"
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

