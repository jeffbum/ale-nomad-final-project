class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :my_ratings, :created_at

  has_one :user
  has_one :beer
end
