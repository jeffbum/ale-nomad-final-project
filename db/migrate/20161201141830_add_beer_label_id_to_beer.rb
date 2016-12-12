class AddBeerLabelIdToBeer < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :beer_label_id, :integer
  end
end
