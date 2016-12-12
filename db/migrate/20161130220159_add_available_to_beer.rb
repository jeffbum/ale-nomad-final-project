class AddAvailableToBeer < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :available, :string
  end
end
