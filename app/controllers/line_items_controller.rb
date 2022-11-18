class LineItemsController < ApplicationController
  # include CurrentCart
  # before_action :set_line_item, only: [:show, :edit, :update, :destroy]
  # before_action :set_cart, only: [:create]

  def index
    line_items = LineItem.all
    render json: line_items
  end

  # GET /line_items/1
  # GET /line_items/1.json
  def show
  end

  # GET /line_items/new
  def new
    @line_item = LineItem.new
  end

  # GET /line_items/1/edit
  def edit
  end

  # POST /line_items
  # POST /line_items.json
  # def create
  #   card = Card.find(params[:card_id])
  #   @line_item = @cart.add_card(card)

  #   respond_to do |format|
  #     if @line_item.save
  #       format.html { redirect_to @line_item.cart, notice: 'Item added to cart.' }
  #       format.json { render :show, status: :created, location: @line_item }
  #     else
  #       format.html { render :new }
  #       format.json { render json: @line_item.errors, status: :unprocessable_entity }
  #     end
  #   end
  # end

  def create
    card = Card.find(params[:card_id])
    line_item = card.line_items.create!(line_item_params)
    # card = Card.find_by(id: session[:user_id])
    render json: line_item, status: :created
  end

  # PATCH/PUT /line_items/1
  # PATCH/PUT /line_items/1.json
  def update
    respond_to do |format|
      if @line_item.update(line_item_params)
        format.html { redirect_to @line_item, notice: 'Line item was successfully updated.' }
        format.json { render :show, status: :ok, location: @line_item }
      else
        format.html { render :edit }
        format.json { render json: @line_item.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    card = Card.find(params[:id])
    card.line_items.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_line_item
      @line_item = LineItem.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def line_item_params
      params.permit(:quantity, :card_id, :cart_id)
    end
end
