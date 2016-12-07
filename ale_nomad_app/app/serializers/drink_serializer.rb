class DrinkSerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :beer
end
