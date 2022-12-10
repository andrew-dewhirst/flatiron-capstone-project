class CardsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    cards = Card.all
    render json: cards
  end

  def destroy
    card = Card.find(params[:id])
    user = User.find_by(id: session[:user_id])
    active_cart = user.carts.where(has_converted: false).first
    cart_contents = card.line_items.where(cart_id: active_cart.id)
    cart_contents.destroy_all
  end

  private

  def authorize
    return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def card_params
    params.permit(:name, :condition, :description, :price, :quantity)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
end
