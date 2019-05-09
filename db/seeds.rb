# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Post.create!(category: 'services', name: 'Ding massages', image:'https://i.imgur.com/hiak1WG.jpg?1', content: 'lowest deep tissue massages in NY' , price: 50 )
Post.create!(category: 'Real Estate', name: '1 bedroom to rent in Astoria', image:'https://i.imgur.com/0Z6035s.jpg', content: 'Beautiful room in a 2 bedroom apartment with private bathroom' , price: 850 )
Post.create!(category: 'Real Estate', name: '1 bedroom to rent in Astoria', image:'https://i.imgur.com/0Z6035s.jpg', content: 'Beautiful room in a 2 bedroom apartment with private bathroom' , price: 850 )
Post.create!(category: 'services', name: 'Ding massages', image:'https://i.imgur.com/hiak1WG.jpg?1', content: 'lowest deep tissue massages in NY' , price: 50 )



User.create!(username: 'bib007', email: 'bibang007@gmail.com', password_digest:'12345678')
User.create!(username: 'aminata', email: 'aminata@gmail.com', password_digest:'12345678')
User.create!(username: 'elijah', email: 'elijah@gmail.com', password_digest:'12345678')
User.create!(username: 'michelle', email: 'michelle@gmail.com', password_digest:'12345678')
User.create!(username: 'papa', email: 'papa@gmail.com', password_digest:'12345678')
User.create!(username: 'zeyou', email: 'zeyou@gmail.com', password_digest:'12345678')
User.create!(username: 'nana', email: 'nana@gmail.com', password_digest:'12345678')
User.create!(username: 'florence', email: 'florence@gmail.com', password_digest:'12345678')
User.create!(username: 'juliana', email: 'juliana@gmail.com', password_digest:'12345678')
