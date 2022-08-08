class User < ApplicationRecord
  has_many :reviews, dependent: :destroy
  has_many :carts, dependent: :destroy
  has_many :cards, through: :reviews
end
