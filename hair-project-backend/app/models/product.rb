class Product < ApplicationRecord
    has_many :ingredients
    validates :name, presence: true
    validates :name, uniqueness: true
end
