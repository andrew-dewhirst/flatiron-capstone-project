class User < ApplicationRecord
  validates :first_name, :last_name, :email, :username, :password, :password_confirmation, presence: true
  validates :email, uniqueness: true
  
  has_secure_password
  has_one_attached :avatar
  
  has_many :reviews, dependent: :destroy
  has_many :carts, dependent: :destroy
  has_many :cards, through: :reviews
end
