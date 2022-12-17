class CartsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

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

  def show
    active_cart = Cart.find_by(id: params[:id])
    if active_cart
      render json: active_cart.cards
    else
      render json: { error: "Cart not found"}, status: :not_found
    end
  end

  def new
    user = User.find_by(id: session[:user_id])
    active_cart = user.carts.where(has_converted: false).first
    if !active_cart
      new_cart = Cart.create!(user_id: user.id, has_converted: false)
      render json: new_cart, status: :created
    else
      render json: active_cart
    end
  end

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
