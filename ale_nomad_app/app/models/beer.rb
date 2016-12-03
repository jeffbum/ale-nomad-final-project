class Beer < ApplicationRecord

    belongs_to :brew
    belongs_to :category
    attachment :beer_label

    include PgSearch

    pg_search_scope :search_by_all, :associated_against => {
          :category => :name
        }, :against => [:name, :abv, :ibu]






end
