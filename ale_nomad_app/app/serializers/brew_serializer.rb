class BrewSerializer < ActiveModel::Serializer
  attributes :id, :brewerydb_id, :name, :status, :website
end
