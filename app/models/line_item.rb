class LineItem < ApplicationRecord
  belongs_to :card
  belongs_to :cart

  def total_price
    card.price.to_i * quantity.to_i
  end
end
