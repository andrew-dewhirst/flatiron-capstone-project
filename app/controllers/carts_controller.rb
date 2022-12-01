class CartsController < ApplicationController
  # rescue_from ActiveRecord::RecordNotFound, with: :invalid_cart
  # before_action :set_cart, only: [:show, :edit, :update, :destroy]

  # GET /carts
  # GET /carts.json
  def index
    carts = Cart.all
    render json: carts
  end

  # GET /carts/1
  # GET /carts/1.json
  def show
    # user = User.find_by(id: session[:user_id])
    # cart = Cart.create!(user_id: user.id, has_converted: false)
    # render json: user
    user = User.find_by(id: session[:user_id])
    if user
      avatar = rails_blob_path(user.avatar)
      render json: { user: user, avatar: avatar }, status: :created
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # GET /carts/new
  def new
    # user = User.find_by(id: session[:user_id])
    # cart = Cart.create!(user_id: user.id, has_converted: false)
    # render json: user
    user = User.find_by(id: session[:user_id])
    active_cart = user.carts.where(has_converted: false).first
    if !active_cart
      new_cart = Cart.create!(user_id: user.id, has_converted: false)
      render json: new_cart, status: :created
    else
      render json: active_cart
    end
  end

  # GET /carts/1/edit
  def edit
  end

  # POST /carts
  # POST /carts.json
  def create
    @cart = Cart.new(cart_params)

    respond_to do |format|
      if @cart.save
        format.html { redirect_to @cart, notice: 'Cart was successfully created.' }
        format.json { render :show, status: :created, location: @cart }
      else
        format.html { render :new }
        format.json { render json: @cart.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /carts/1
  # PATCH/PUT /carts/1.json
  def update
    cart = Cart.find_by(id: params[:id])
      cart.update!(cart_params)
      render json: cart
  end 

  # DELETE /carts/1
  # DELETE /carts/1.json
  def destroy
    @cart.destroy if @cart.id == session[:cart_id]
    session[:cart_id] = nil
    respond_to do |format|
      format.html { redirect_to root_path, notice: 'Cart was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cart
      @cart = Cart.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cart_params
      params.permit(:has_converted)
    end

    def invalid_cart
      logger.error "Attempt to access invalid cart #{params[:id]}"
      redirect_to root_path, notice: "That cart doesn't exist"
    end
end
