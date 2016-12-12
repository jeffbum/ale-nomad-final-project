class AddBrewIdToBeer < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :brew_id, :integer
  end
end
