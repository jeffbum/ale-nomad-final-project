class Beer < ApplicationRecord

    belongs_to :brew
    belongs_to :category
    attachment :beer_label





end
