class CreateBeers < ActiveRecord::Migration[5.0]
  def change
    create_table :beers do |t|
      t.string :beer_name
      t.string :beer_label
      t.integer :beer_abv
      t.integer :beer_ibu
      t.string :beer_description
      t.integer :bid
      t.string :beer_style
      t.integer :rating_score

      t.timestamps
    end
  end
end
