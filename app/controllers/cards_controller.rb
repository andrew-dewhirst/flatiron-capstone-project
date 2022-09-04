class CardsController < ApplicationController
  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  before_action :authorize

  def index
    cards = Card.all
    render json: cards
  end

  def create
    user = User.find_by(id: session[:user_id])
    card = user.cards.create!(card_params)
    render json: card, status: :created
  end

  def update
    card = Card.find_by(id: params[:id])
      card.update!(card_params)
      render json: card
  end 

  def destroy
    card = Card.find(params[:id])
    card.destroy
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
