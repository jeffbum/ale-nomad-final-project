class Brew < ApplicationRecord

  has_many :beers
  attachment :images
  acts_as_mappable





  #
  # include PgSearch
  #
  # pg_search_scope :search_by_category, :associated_against => {
  #       :category => :name
  #     }, against: :name



end
