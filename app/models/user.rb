class User < ApplicationRecord
    has_many :spreads
    has_many :readings, through: :spreads 
end
