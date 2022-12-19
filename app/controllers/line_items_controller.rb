class LineItemsController < ApplicationController

  def index
    line_items = LineItem.all
    render json: line_items
  end

  def create
    card = Card.find(params[:card_id])
    line_item = card.line_items.create!(line_item_params)
    render json: line_item, status: :created
  end

  def destroy
    card = Card.find(params[:id])
    card.line_items.destroy
  end

  private

    def line_item_params
      params.permit(:quantity, :card_id, :cart_id)
    end
end
