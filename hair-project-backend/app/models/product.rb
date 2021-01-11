class Product < ApplicationRecord
    has_many :ingredients
    validates :name, presence: true
    validates :name, uniqueness: true

    accepts_nested_attributes_for :ingredients, reject_if: :all_blank

end
