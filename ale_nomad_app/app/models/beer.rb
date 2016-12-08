class Beer < ApplicationRecord
    has_many :reviews
    has_many :drinks
    has_many :users, through: :drinks
    belongs_to :brew
    belongs_to :category
    attachment :beer_label
    paginates_per 50

    include PgSearch

    pg_search_scope :search_by_all, :associated_against => {
          :category => :name
        }, :against => [:name, :abv, :ibu]






end
