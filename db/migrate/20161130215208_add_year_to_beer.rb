class AddYearToBeer < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :year, :string
  end
end
