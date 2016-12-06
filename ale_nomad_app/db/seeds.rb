# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
brewery_db = BreweryDB::Client.new do |config|
  config.api_key = ENV['breweryapikey']
end

feedback = brewery_db.locations.all(locality: 'Indianapolis', offset: 50)

feedback.each do |x|
  brew = Brew.create!(
  brewerydb_id: x.brewery.id,
  name: x.brewery.name,
  status: x.brewery.status,
  website: x.brewery.website,
  lat: x.latitude,
  lng: x.longitude,
  hours_of_operation: x.hours_of_operation,
  phone: x.phone,
  street_address: x.street_address,
  postal_code: x.postal_code,
  established: x.brewery.established,
  remote_images_url: x.brewery.images.try(:large)
  )
  brewery_db.brewery(brew.brewerydb_id).beers.each do |beer|
    if beer.style
      category = Category.find_or_create_by(
        name: beer.style.category.name,
        description: beer.style.category.description
      )
    else
      category = nil
    end

    brew.beers.create!(
    beer_name: beer.name,
    beer_abv: beer.abv,
    beer_ibu: beer.ibu,
    category: category,
    beer_description: beer.description,
    remote_beer_label_url: beer.labels.try(:large),
    available: beer.available&.name,
    year: beer.year
    )
  end
end
