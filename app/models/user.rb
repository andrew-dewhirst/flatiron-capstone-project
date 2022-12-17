class User < ApplicationRecord
  validates :first_name, :last_name, :email, :username, :password, :password_confirmation, :avatar, presence: true
  validates :email, uniqueness: true
  validates :first_name, length: { minimum: 2 }
  validates :last_name, length: { minimum: 2 }
  validates :password, length: { in: 6..20 }

  has_secure_password
  has_one_attached :avatar
  
  has_many :reviews, dependent: :destroy
  has_many :carts, dependent: :destroy
  has_many :cards, through: :reviews

end
