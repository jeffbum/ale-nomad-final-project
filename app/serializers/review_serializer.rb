class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :rating, :created_at

  has_one :user
  has_one :beer
end
