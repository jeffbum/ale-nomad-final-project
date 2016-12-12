class RemoveImagesColumnFromBrew < ActiveRecord::Migration[5.0]
  def change
    remove_column :brews, :images, :string
    add_column :brews, :images_id, :string
  end
end
