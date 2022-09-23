class UsersController < ApplicationController

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response

  def index
    # users = User.all
    users = User.first
    avatar = rails_blob_path(users.avatar)
    # render json: users
    render json: { users: users, avatar: avatar }
  end
  
  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    user = User.find_by(id: session[:user_id])
    avatar = rails_blob_path(user.avatar)
    if user
      render json: { user: user, avatar: avatar }, status: :created
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

