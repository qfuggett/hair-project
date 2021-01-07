class ReadingSerializer < ActiveModel::Serializer
    attributes :id, :name, :description, :upright, :reversed
    belongs_to :user
end