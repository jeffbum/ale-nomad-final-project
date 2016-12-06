class Brew < ApplicationRecord

  has_many :beers
  attachment :images
  acts_as_mappable





end
