class CreateDrinks < ActiveRecord::Migration[5.0]
  def change
    create_table :drinks do |t|
      t.references :user, foreign_key: true
      t.references :beer, foreign_key: true

      t.timestamps
    end
  end
end
