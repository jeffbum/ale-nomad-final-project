class BeerSerializer < ActiveModel::Serializer
  attributes :id, :beer_name, :beer_label, :beer_abv, :beer_ibu, :beer_description, :bid, :beer_style, :rating_score

  has_one :brew
  has_one :category


  def beer_label
    Refile.attachment_url(object, :beer_label, :fit, 800, 800, format: "png")
  end








end
