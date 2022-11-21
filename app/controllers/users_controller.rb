class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  # def index
  #   # users = User.all
  #   users = User.first
  #   if users
  #     avatar = rails_blob_path(users.avatar)
  #   # render json: users
  #     render json: { users: users, avatar: avatar }
  #   else
  #     render json: { error: "No user found" }, status: :unauthorized
  #   end
  # end

  def index
    users = User.all
    render json: users
  end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    active_cart = user.carts.where(has_converted: false).first
    if user
      if active_cart
        avatar = rails_blob_path(user.avatar)
        render json: { user: user, avatar: avatar, cart: active_cart, line_items: active_cart.line_items }, status: :created
      else
        new_cart = Cart.create!(user_id: user.id, has_converted: false)
        render json: {user: user, avatar: avatar, cart: new_cart}
      end
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  private

  def user_params
    params.permit(:first_name, :last_name, :email, :birthday, :username, :password, :password_confirmation)
  end

  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors.full_messages }, status: :unprocessable_entity
  end
  
end

