class ChangeBidToString < ActiveRecord::Migration[5.0]
  def change
    change_column :beers, :bid, :string
  end
end
