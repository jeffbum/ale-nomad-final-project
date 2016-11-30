# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


# feedback = brewery_db.locations.all(locality: 'Indianapolis')
#
# brewery_db = BreweryDB::Client.new do |config|
#   config.api_key = ENV['brewery_api_key']
# end
#
#
#
# feedback.each do |x|
#   brew = Brewery.create!(
#   brewerydb_id: x.brewery.id,
#   name: x.brewery.name,
#   status: x.brewery.status,
#   website: x.brewery.website
#   )
#   brewery_db.brewery(brewery.brewerydb_id).beers.each do |beer|
#     if beer.style
#       category = Category.find_by(
#         name: beer.style.name,
#         description: beer.style.description
#       )
#     else
#       category = nil
#     end
#
#     brewery.beers.create!(
#     name: beer.name,
#     abv: beer.style.abv,
#     category: category
#     )
