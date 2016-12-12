class RemoveBeerLabelFromBeer < ActiveRecord::Migration[5.0]
  def change
    remove_column :beers, :beer_label, :string
    change_column :beers, :beer_label_id, :string
  end
end
