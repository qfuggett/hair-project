class Ingredient < ApplicationRecord
    belongs_to :product
    validates :name, presence: true
    validates :name, uniqueness: true
end
