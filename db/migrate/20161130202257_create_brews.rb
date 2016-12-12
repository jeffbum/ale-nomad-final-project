class CreateBrews < ActiveRecord::Migration[5.0]
  def change
    create_table :brews do |t|
      t.string :brewerydb_id
      t.string :name
      t.string :status
      t.string :website

      t.timestamps
    end
  end
end
