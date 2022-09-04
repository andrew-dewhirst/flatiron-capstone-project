class ReviewsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  def index
    reviews = Review.all
    render json: reviews
  end

  def create
    user = User.find_by(id: session[:user_id])
    review = user.reviews.create!(review_params)
    render json: review, status: :created
  end

  def destroy
    review = Review.find(params[:id])
    review.destroy
  end

  private

  def authorize
    return render json: { errors: ["Not Authorized"] }, status: :unauthorized unless session.include? :user_id
  end

  def review_params
    params.permit(:title, :description, :rating)
  end
