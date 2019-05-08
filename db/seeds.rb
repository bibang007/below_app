# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create!(category: 'services', name: 'Ding massages', image:'https://i.imgur.com/hiak1WG.jpg?1', content: 'lowest deep tissue massages in NY' , price: 50 )
Post.create!(category: 'Real Estate', name: '1 bedroom to rent in Astoria', image:'https://i.imgur.com/0Z6035s.jpg', content: 'Beautiful room in a 2 bedroom apartment with private bathroom' , price: 850 )
