class AddLatToBrew < ActiveRecord::Migration[5.0]
  def change
    add_column :brews, :lat, :decimal, precision: 9, scale: 7
    add_column :brews, :lng, :decimal, precision: 9, scale: 7
    add_column :brews, :hours_of_operation, :string
    add_column :brews, :phone, :string
    add_column :brews, :street_address, :string
    add_column :brews, :postal_code, :string
    add_column :brews, :established, :string
    add_column :brews, :images, :string
  end
end
