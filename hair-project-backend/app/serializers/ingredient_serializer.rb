class IngredientSerializer < ActiveModel::Serializer
    belongs_to :product
    attributes :id, :name, :description
end