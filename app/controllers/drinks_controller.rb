class DrinksController < ApplicationController

  before_action :require_login

  def create
    @drink = Drink.new(drink_params)
    @drink.user = current_user
    if @drink.save
      render json: @drink
    else
      render json: @drink.user.errors.full_messages, status: 422
    end
  end

  def my_drinks
    @my_drink = current_user.beers.order('created_at DESC')
    render json: @my_drink
  end

  private

  def drink_params
    params.permit(:beer_id)
  end
end
