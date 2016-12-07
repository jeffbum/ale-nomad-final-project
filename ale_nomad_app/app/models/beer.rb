class Beer < ApplicationRecord
    has_many :drinks
    has_many :users, through: :drinks
    belongs_to :brew
    belongs_to :category
    attachment :beer_label

    include PgSearch

    pg_search_scope :search_by_all, :associated_against => {
          :category => :name
        }, :against => [:name, :abv, :ibu]






end
