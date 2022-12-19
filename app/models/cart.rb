class Cart < ApplicationRecord
  belongs_to :user
  has_many :line_items, dependent: :destroy
  has_many :cards, through: :line_items

  # ##Testing custom methods to increment card count and define total price
  # def add_card(card)
  #   current_item = line_items.find_by(card_id: card.id)

  #   if current_item
  #     current_item.increment(:quantity)
  #   else
  #     current_item = line_items.build(card_id: card.id)
  #   end
  #   current_item
  # end

  # def total_price
  #   line_items.to_a.sum { |item| item.total_price }
  # end
end
