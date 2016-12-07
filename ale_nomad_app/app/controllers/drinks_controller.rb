class DrinksController < ApplicationController


  def create
    @drink = Drink.new(drink_params)
      @drink.user = current_user
      if @drink.save
        render json: @drink
      else
        render json: @user.errors.full_messages, status: 422
      end
  end

  def my_drinks
    @my_drink = current_user.beers.order("created_at DESC")
    render json: @my_drinks
  end

  # def friends_drinks
  #   @friend_drinks = current_user.followees(User).drink("created_at DESC")
  #     render json: @friend_drinks
  # end


private

  def drink_params
    params.permit(:beer_id, :user_id)
  end


end
