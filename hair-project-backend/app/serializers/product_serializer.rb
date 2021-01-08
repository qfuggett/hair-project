class ProductSerializer < ActiveModel::Serializer
    has_many :ingredients
    attributes :id, :name
end