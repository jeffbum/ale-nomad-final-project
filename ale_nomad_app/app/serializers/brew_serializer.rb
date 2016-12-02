class BrewSerializer < ActiveModel::Serializer
  attributes :id, :brewerydb_id, :name, :status, :website, :lat, :lng, :hours_of_operation, :phone,
             :street_address, :postal_code, :established, :images
end
