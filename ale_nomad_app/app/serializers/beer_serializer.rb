class BeerSerializer < ActiveModel::Serializer
  attributes :id, :beer_name, :beer_label, :beer_abv, :beer_ibu, :beer_description, :bid, :beer_style, :rating_score



  def beer_label
    Refile.attachment_url(object, :image, :fit, 800, 800, format: "jpeg")
  end







  
end
