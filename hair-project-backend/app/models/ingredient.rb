class Ingredient < ApplicationRecord
    belongs_to :product

    validates :name, presence: true
    validates :name, uniqueness: true
    
    accepts_nested_attributes_for :product, reject_if: :all_blank
end
