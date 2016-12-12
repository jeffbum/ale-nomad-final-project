class Drink < ApplicationRecord
  belongs_to :user
  belongs_to :beer

  # def friends_drinks
  #   @friend_drinks = current_user.followees(User).drink("created_at DESC")
  #     render json: @friend_drinks
  # end
end
