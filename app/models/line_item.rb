class LineItem < ApplicationRecord
  belongs_to :card
  belongs_to :cart

  # ## To be used in tandem with custom methods in cart model
  # def total_price
  #   card.price.to_i * quantity.to_i
  # end
end
