class Brew < ApplicationRecord

  has_many :beers
  attachment :images
  acts_as_mappable
  paginates_per 50

end
