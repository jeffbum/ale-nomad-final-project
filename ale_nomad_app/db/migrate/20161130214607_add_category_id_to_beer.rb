class AddCategoryIdToBeer < ActiveRecord::Migration[5.0]
  def change
    add_column :beers, :category_id, :integer
  end
end
