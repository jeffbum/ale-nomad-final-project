class BeerSerializer < ActiveModel::Serializer
  attributes :id, :beer_name, :beer_label, :beer_abv, :beer_ibu, :beer_description, :bid, :beer_style

  has_one :brew
  has_one :category
  has_many :reviews

  def beer_label
    Refile.attachment_url(object, :beer_label, :fit, 800, 800, format: "png")
  end








end
