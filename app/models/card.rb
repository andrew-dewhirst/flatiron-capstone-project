class Card < ApplicationRecord
  has_one_attached :avatar

  has_many :reviews, dependent: :destroy
  has_many :users, through: :reviews
  has_many :line_items, dependent: :destroy
  has_many :carts, through: :line_items

end
