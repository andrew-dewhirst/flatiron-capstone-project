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
  name: "Ronald Acuna Jr.",
  description: "Topps 2022 - Series 1 - Base Set",
  condition: "Near Mint",
  price: 25,
  quantity: 12,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/07/2022-Topps-Series-1-Baseball-Cards-Base-Ronald-Acuna-Jr.jpg"
)

Card.create(
  name: "Shohei Ohtani",
  description: "Topps 2022 - Series 1 - Platinum Parallel",
  condition: "Mint",
  price: 750,
  quantity: 23,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/07/2022-Topps-Series-1-Baseball-Cards-Base-Platinum-Shohei-Ohtani.jpg"
)

Card.create(
  name: "Aaron Judge",
  description: "Topps 2022 - Series 1 - Home Field Advantage",
  condition: "Lightly Played",
  price: 145.00,
  quantity: 30,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2022/02/2022-Topps-Series-1-Baseball-Cards-Home-Field-Advantage-Aaron-Judge-SSP.jpg"
)

Card.create(
  name: "Kyle Muller",
  description: "Topps 2022 - Series 1 - Base Set",
  condition: "Near Mint",
  price: 75,
  quantity: 15,
  genre: "Baseball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/02/2022-Topps-30-Kyle-Muller.jpg"
)

Card.create(
  name: "Travis D'Arnaud",
  description: "Topps 2022 - Series 1 - Base Set",
  condition: "Mint",
  price: 150,
  quantity: 21,
  genre: "Baseball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/02/2022-Topps-4-Travis-DArnaud.jpg"
)

Card.create(
  name: "Gavin Sheets",
  description: "Topps 2022 - Series 1 - Rookie Card Collection",
  condition: "Heavily Played",
  price: 25,
  quantity: 7,
  genre: "Baseball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/02/2022-Topps-12-Gavin-Sheets.jpg"
)

Card.create(
  name: "Francisco Lindor",
  description: "Topps 2022 - Series 1 - Wood Parallel",
  condition: "Damaged",
  price: 15,
  quantity: 10,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/07/2022-Topps-Series-1-Baseball-Cards-1987-Topps-Baseball-Wood-Francisco-Lindor.jpg"
)

Card.create(
  name: "Derek Jeter",
  description: "Topps 2022 - Series 1 - Throwback Parallel",
  condition: "Mint",
  price: 275,
  quantity: 4,
  genre: "Baseball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/02/2022-Topps-Series-1-Variations-23-Derek-Jeter.jpg"
)

Card.create(
  name: "Mike Trout",
  description: "Topps 2022 - Series 1 - Relic Parallel",
  condition: "Lightly Played",
  price: 45,
  quantity: 12,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/07/2022-Topps-Series-1-Baseball-Cards-1987-Topps-Baseball-Relic-Mike-Trout.jpg"
)

Card.create(
  name: "Shane Bieber",
  description: "Topps 2022 - Series 1 - Base Set",
  condition: "Lightly Played",
  price: 80,
  quantity: 12,
  genre: "Baseball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/02/2022-Topps-21-Shane-Bieber.jpg"
)

Card.create(
  name: "Jarred Kelenic",
  description: "Topps 2022 - Series 1 - Oversized Topper",
  condition: "Near Mint",
  price: 35,
  quantity: 17,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/07/2022-Topps-Series-1-Baseball-Cards-Oversized-1987-Topps-Future-Stars-Boxloader-Autograph-Jarred-Kelenic.jpg"
)

Card.create(
  name: "Wander Franco",
  description: "Topps 2022 - Series 1 - Rookie Card Collection",
  condition: "Mint",
  price: 400,
  quantity: 2,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/07/2022-Topps-Series-1-Baseball-Cards-Base-Wander-Franco-RC.jpg"
)

Card.create(
  name: "Shane Baz",
  description: "Topps 2022 - Series 2 - Base Set",
  condition: "Lightly Played",
  price: 10,
  quantity: 35,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/11/2022-Topps-Series-2-Baseball-Cards-Base-Base-Independence-Day-Shane-Baz-RC.jpg"
)

Card.create(
  name: "Paul Goldschmidt",
  description: "Topps 2022 - Series 2 - Red Parallel",
  condition: "Near Mint",
  price: 200,
  quantity: 9,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/11/2022-Topps-Series-2-Baseball-Cards-Base-Red-Foilboard-Paul-Goldschmidt.jpg"
)

Card.create(
  name: "Clayton Kershaw",
  description: "Topps 2022 - Series 2 - No Hit Club",
  condition: "Lightly Played",
  price: 55,
  quantity: 6,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/11/2022-Topps-Series-2-Baseball-Cards-No-Hit-Club-Gold-Clayton-Kershaw.jpg"
)

Card.create(
  name: "Ronald Acuna Jr.",
  description: "Topps 2022 - Series 2 - Sweet Shades",
  condition: "Damaged",
  price: 20,
  quantity: 11,
  genre: "Baseball",
  image: "https://www.cardboardconnection.com/wp-content/uploads/2021/11/2022-Topps-Series-2-Baseball-Cards-Sweet-Shades-Ronald-Acuna-Jr.jpg"
)

Card.create(
  name: "Jonathan Taylor",
  description: "Panini 2022 - Blue Parallel Series",
  condition: "Near Mint",
  price: 10,
  quantity: 11,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Absolute-Football-Base.jpg"
)

Card.create(
  name: "Trey Lance",
  description: "Panini 2022 - Explosive Series",
  condition: "Lightly Played",
  price: 15,
  quantity: 19,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Absolute-Football-Explosive.jpg"
)

Card.create(
  name: "Josh Allen",
  description: "Panini 2022 - Flawless Series",
  condition: "Mint",
  price: 250,
  quantity: 5,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/09/2022-Panini-Flawless-Collegiate-Football-Base.jpg"
)

Card.create(
  name: "Kenny Pickett",
  description: "Panini 2022 - Flawless Series",
  condition: "Mint",
  price: 125,
  quantity: 14,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/09/2022-Panini-Flawless-Collegiate-Football-Rookie-Patch-Autograph.jpg"
)

Card.create(
  name: "Tom Brady",
  description: "Panini 2022 - Mosaic Series",
  condition: "Heavily Played",
  price: 25,
  quantity: 17,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Base-National-Pride-White-Mosaic.jpg"
)

Card.create(
  name: "Josh Allen",
  description: "Panini 2022 - Mosaic Series",
  condition: "Mint",
  price: 210,
  quantity: 3,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Base-Tessellation.jpg"
)

Card.create(
  name: "TJ Watt",
  description: "Panini 2022 - Mosaic Series",
  condition: "Near Mint",
  price: 85,
  quantity: 12,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Mosaic-Autographs.jpg"
)

Card.create(
  name: "Jonathan Taylor",
  description: "Panini 2022 - Storm Chasers Series",
  condition: "Lightly Played",
  price: 35,
  quantity: 9,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Storm-Chasers.jpg"
)

Card.create(
  name: "Aaron Rodgers",
  description: "Panini 2022 - Men of Mastery Series",
  condition: "Lightly Played",
  price: 45,
  quantity: 19,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Men-of-Mastery.jpg"
)

Card.create(
  name: "Malik Willis",
  description: "Panini 2022 - XR Rookie Expose Series",
  condition: "Near Mint",
  price: 55,
  quantity: 6,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/11/2022-Panini-XR-Football-5.jpg"
)

Card.create(
  name: "Joe Burrow",
  description: "Panini 2022 - Swagger Series",
  condition: "Mint",
  price: 175,
  quantity: 15,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Swagger.jpg"
)

Card.create(
  name: "Justin Herbert",
  description: "Panini 2022 - Razzle Dazzle Series",
  condition: "Near Mint",
  price: 80,
  quantity: 4,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Mosaic-Football-Razzle-Dazzle.jpg"
)

Card.create(
  name: "Aaron Rodgers",
  description: "Panini 2022 - Prizm Draft Picks Series",
  condition: "Damaged",
  price: 65,
  quantity: 23,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/02/2022-Panini-Prizm-Draft-Picks-Football-Base-Red-Prizm.jpg"
)

Card.create(
  name: "Matt Corral",
  description: "Panini 2022 - XR Autograph Series",
  condition: "Heavily Played",
  price: 5,
  quantity: 20,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/11/2022-Panini-XR-Football-Rookie-Autographs.jpg"
)

Card.create(
  name: "Desmond Ridder",
  description: "Panini 2022 - XR Autograph Series",
  condition: "Near Mint",
  price: 25,
  quantity: 30,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/11/2022-Panini-XR-Football-Rookie-Autograph-Triple-Memorabilia.jpg"
)

Card.create(
  name: "Tom Brady",
  description: "Panini 2022 - Kaboom Series",
  condition: "Mint",
  price: 125,
  quantity: 5,
  genre: "Football",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-Panini-Absolute-Football-Kaboom.jpg"
)

Card.create(
  name: "Josh Giddey",
  description: "Panini 2022 - NBA Hoops - Red Parallel Series",
  condition: "Heavily Played",
  price: 15,
  quantity: 5,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-23-Panini-NBA-Hoops-Gravity.jpg"
)

Card.create(
  name: "Jaden Ivey",
  description: "Panini 2022 - NBA Hoops - Rookie Ink Series",
  condition: "Mint",
  price: 55,
  quantity: 23,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-23-Panini-NBA-Hoops-Rookie-Ink.jpg"
)

Card.create(
  name: "Trae Young",
  description: "Panini 2022 - NBA Hoops - Hipnotized Series",
  condition: "Near Mint",
  price: 40,
  quantity: 11,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2022-23-Panini-NBA-Hoops-HIPnotized.jpg"
)

Card.create(
  name: "Scottie Barnes",
  description: "Panini 2022 - Spectra - Rookie Autograph Series",
  condition: "Mint",
  price: 95,
  quantity: 3,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/08/2021-22-Panini-Spectra-Basketball-Rookie-Jersey-Autographs-Meta.jpg"
)

Card.create(
  name: "Luka Doncic",
  description: "Panini 2022 - Spectra - In The Zone Series",
  condition: "Lightly Played",
  price: 65,
  quantity: 20,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/08/2021-22-Panini-Spectra-Basketball-In-the-Zone-Autograph.jpg"
)

Card.create(
  name: "Stephen Curry",
  description: "Panini 2022 - Spectra - Solar Eclipse Series",
  condition: "Mint",
  price: 135,
  quantity: 14,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/08/2021-22-Panini-Spectra-Basketball-Solar-Eclipse.jpg"
)

Card.create(
  name: "Davion Mitchell",
  description: "Panini 2022 - Select - Base Set",
  condition: "Damaged",
  price: 5,
  quantity: 42,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/08/2021-22-Select-Basketball-Base.jpg"
)

Card.create(
  name: "Jalen Suggs",
  description: "Panini 2022 - Select - Rookie Autograph Series",
  condition: "Near Mint",
  price: 35,
  quantity: 10,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/08/2021-22-Select-Basketball-Rookie-Signatures.jpg"
)

Card.create(
  name: "Jalen Green",
  description: "Panini 2022 - Mosaic - Base Set",
  condition: "Mint",
  price: 75,
  quantity: 12,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/05/2021-22-Panini-Mosaic-Basketball-Base-Gold-Mosaic.jpg"
)

Card.create(
  name: "Ja Morant",
  description: "Panini 2022 - Select - Unstoppable Series",
  condition: "Mint",
  price: 175,
  quantity: 8,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/08/2021-22-Select-Basketball-Unstoppable.jpg"
)

Card.create(
  name: "Trae Young",
  description: "Panini 2022 - Mosaic - Overdrive Series",
  condition: "Heavily Played",
  price: 20,
  quantity: 6,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/05/2021-22-Panini-Mosaic-Basketball-Overdrive.jpg"
)

Card.create(
  name: "Anthony Edwards",
  description: "Panini 2022 - Mosaic - Straight Fire Series",
  condition: "Lightly Played",
  price: 60,
  quantity: 15,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/05/2021-22-Panini-Mosaic-Basketball-Straight-Fire.jpg"
)

Card.create(
  name: "Stephen Curry",
  description: "Panini 2022 - Mosaic - Stained Glass Series",
  condition: "Mint",
  price: 205,
  quantity: 9,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/05/2021-22-Panini-Mosaic-Basketball-Stained-Glass.jpg"
)

Card.create(
  name: "Bones Hyland",
  description: "Panini 2022 - Immaculate - Rookie Autograph Series",
  condition: "Near Mint",
  price: 30,
  quantity: 2,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2021-22-Panini-Immaculate-Basketball-Rookie-Patch-Autograph.jpg"
)

Card.create(
  name: "Luka Doncic",
  description: "Panini 2022 - Immaculate - Patch Autograph Series",
  condition: "Lightly Played",
  price: 80,
  quantity: 17,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2021-22-Panini-Immaculate-Basketball-Patch-Autographs-Tag.jpg"
)

Card.create(
  name: "Josh Giddey",
  description: "Panini 2022 - Immaculate - Sole of the Game Series",
  condition: "Damaged",
  price: 30,
  quantity: 7,
  genre: "Basketball",
  image: "https://img.beckett.com/news/news-content/uploads/2022/10/2021-22-Panini-Immaculate-Basketball-Sole-of-the-Game.jpg"
)

Card.create(
  name: "Trevor Zegras",
  description: "Upper Deck 2022 - Allure - Black Rainbow Parallel",
  condition: "Lightly Played",
  price: 20,
  quantity: 7,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/09/2021-22-Upper-Deck-Allure-Hockey-Black-Rainbow.jpg"
)

Card.create(
  name: "Auston Matthews",
  description: "Upper Deck 2022 - Allure - Green Rainbow Parallel",
  condition: "Mint",
  price: 130,
  quantity: 3,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/09/2021-22-Upper-Deck-Allure-Hockey-Base-Green-Rainbow-Die-Cut.jpg"
)

Card.create(
  name: "Quinton Byfield",
  description: "Upper Deck 2022 - Allure - Rookie Autograph Series",
  condition: "Near Mint",
  price: 65,
  quantity: 21,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/09/2021-22-Upper-Deck-Allure-Hockey-Base-Purple-Diamond-Auto-Patch.jpg"
)

Card.create(
  name: "Spencer Knight",
  description: "Upper Deck 2022 - Allure - Control Room Series",
  condition: "Heavily Played",
  price: 15,
  quantity: 28,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/09/2021-22-Upper-Deck-Allure-Hockey-28.jpg"
)

Card.create(
  name: "Cale Makar",
  description: "Upper Deck 2022 - Allure - Iced Out Series",
  condition: "Mint",
  price: 90,
  quantity: 6,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/09/2021-22-Upper-Deck-Allure-Hockey-Iced-Out.jpg"
)

Card.create(
  name: "Alex Ovechkin",
  description: "Upper Deck 2022 - Credentials - Teal Parallel",
  condition: "Mint",
  price: 125,
  quantity: 12,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/05/2021-22-Upper-Deck-Credentials-Hockey-Teal.jpg"
)

Card.create(
  name: "John Tavares",
  description: "Upper Deck 2022 - Credentials - Base Set",
  condition: "Lightly Played",
  price: 40,
  quantity: 19,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/05/2021-22-Upper-Deck-Credentials-Hockey-Main-Stage-Signatures.jpg"
)

Card.create(
  name: "Dawson Mercer",
  description: "Upper Deck 2022 - Ice Hockey - Premiers Series",
  condition: "Damaged",
  price: 5,
  quantity: 30,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/12/2021-22-Upper-Deck-Ice-Hockey-Base-Ice-Premieres.jpg"
)

Card.create(
  name: "Elias Pettersson",
  description: "Upper Deck 2022 - Synergy - Red Parallel",
  condition: "Near Mint",
  price: 70,
  quantity: 28,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/01/2021-22-Upper-Deck-Synergy-Hockey-Base-Red.jpg"
)

Card.create(
  name: "Auston Matthew",
  description: "Upper Deck 2022 - Ice Hockey - Crystals Series",
  condition: "Near Mint",
  price: 40,
  quantity: 11,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/12/2021-22-Upper-Deck-Ice-Hockey-Crystals.jpg"
)

Card.create(
  name: "Alex Ovechkin",
  description: "Upper Deck 2022 - Ice Hockey - Sub Zero Series",
  condition: "Heavily Played",
  price: 20,
  quantity: 16,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2021/12/2021-22-Upper-Deck-Ice-Hockey-Sub-Zero.jpg"
)

Card.create(
  name: "Cole Caufield",
  description: "Upper Deck 2022 - Synergy - Base Set",
  condition: "Mint",
  price: 45,
  quantity: 30,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/01/2021-22-Upper-Deck-Synergy-Hockey-13.jpg"
)

Card.create(
  name: "Connor McDavid",
  description: "Upper Deck 2022 - Stature - Base Set",
  condition: "Mint",
  price: 100,
  quantity: 25,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/06/2021-22-Upper-Deck-Stature-Hockey-Base-Black.jpg"
)

Card.create(
  name: "Lucas Raymond",
  description: "Upper Deck 2022 - Stature - Rookie Autograph Series",
  condition: "Heavily Played",
  price: 15,
  quantity: 9,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/06/2021-22-Upper-Deck-Stature-Hockey-Base-Rookie-Design-Variant-Red-Auto-Patch.jpg"
)

Card.create(
  name: "Patrick Roy",
  description: "Upper Deck 2022 - Stature - Legendary Heights Series",
  condition: "Mint",
  price: 225,
  quantity: 13,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/06/2021-22-Upper-Deck-Stature-Hockey-Legendary-Heights-Autograph.jpg"
)

Card.create(
  name: "Matthew Tkachuk",
  description: "Upper Deck 2022 - Stature - Gravitas Series",
  condition: "Lightly Played",
  price: 35,
  quantity: 9,
  genre: "Hockey",
  image: "https://img.beckett.com/news/news-content/uploads/2022/06/2021-22-Upper-Deck-Stature-Hockey-Gravitas.jpg"
)
