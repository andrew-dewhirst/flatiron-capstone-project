class CartsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # Show all the carts belonging to a specific user
  def index
    user = User.find_by(id: session[:user_id])
    active_carts = user.carts.where(has_converted: false).map { |cart| cart.cards }
    purchased_carts = user.carts.where(has_converted: true).map { |cart| cart.cards }
    if user
      render json: { active_carts: active_carts, purchased_carts: purchased_carts }, status: :created
    else
      render json: { error: "No cart found" }, status: :unauthorized
    end
  end

  # Show current cart only
  def show
    active_cart = Cart.find_by(id: params[:id])
    if active_cart
      render json: active_cart.cards
    else
      render json: { error: "Cart not found"}, status: :not_found
    end
  end

  # Update cart to a "has converted" cart - proxy for purchased cart
  def update
    cart = Cart.find_by(id: params[:id])
      cart.update!(cart_params)
      render json: cart
  end 

  private

    def cart_params
      params.permit(:has_converted)
    end

    def render_unprocessable_entity_response(invalid)
      render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
    end

end
