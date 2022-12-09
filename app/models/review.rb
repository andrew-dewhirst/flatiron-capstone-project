class Review < ApplicationRecord
validates :title, :description, :rating, presence: true

  belongs_to :user
  belongs_to :card
end
