class ReviewsController < ApplicationController

  def create
    @review = Review.new(post_params)
      @review.user = current_user
        if @review.save
          render json: @review
        else
          render json: @user.errors.full_messages, status: 422
        end
  end



  def update
  end



  private

  def post_params
    params.require(:post).permit(:rating_score, :user_id)
  end

end
