class UsersController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response


  def index
    users = User.all
    render json: users
  end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  # Show the active user and their associated cart - if no cart, create new cart
  def show
    user = User.find_by(id: session[:user_id])
    active_cart = user.carts.where(has_converted: false).first
    purchased_carts = user.carts.where(has_converted: true)
    if user
      if active_cart
        avatar = rails_blob_path(user.avatar)
        render json: { user: user, avatar: avatar, cart: active_cart, line_items: active_cart.line_items, purchases: purchased_carts }, status: :created
      else
        new_cart = Cart.create!(user_id: user.id, has_converted: false)
        render json: {user: user, avatar: avatar, cart: new_cart}
      end
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  def update
    user = User.find_by(id: params[:id])
      user.update!(user_params)
      render json: user
  end 

  private

  def user_params
    params.require(:user).permit(:first_name, :last_name, :email, :birthday, :username, :password, :password_confirmation, :avatar) 
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
end

