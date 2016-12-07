class RemoveImageFromUser < ActiveRecord::Migration[5.0]
  def change
    remove_column :users, :image, :string
    add_column :users, :images_id, :string
  end
end
