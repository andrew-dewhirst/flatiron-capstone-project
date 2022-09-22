class User < ApplicationRecord
  has_secure_password
  has_one_attached :avatar
  
  has_many :reviews, dependent: :destroy
  has_many :carts, dependent: :destroy
  has_many :cards, through: :reviews
end
