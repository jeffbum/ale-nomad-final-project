class BrewSerializer < ActiveModel::Serializer
  attributes :id, :brewerydb_id, :name, :status, :website, :lat, :lng, :hours_of_operation, :phone,
             :street_address, :postal_code, :established, :images

  has_many :beers



  def images
    Refile.attachment_url(object, :images, :fit, 800, 800, format: "png")
  end
end
