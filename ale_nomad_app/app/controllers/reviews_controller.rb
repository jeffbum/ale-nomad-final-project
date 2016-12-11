class ReviewsController < ApplicationController

  def create
    @review = current_user.review.new(new_review_params)
        if @review.save
          render json: @review
        else
          render json: @user.errors.full_messages, status: 422
        end
  end
  def show
    @review = Review.find(params[:id])
    render json: @review
  end
  def update
    @review = Review.find_by(token: params[:token])
    @review.update!(update_review_params)
      if @review.save
        render json: @review
      else
        render json: @review.errors
      end
  end
  def my_ratings
    @my_ratings = current_user.reviews.order("created_at DESC")
    render json: @my_ratings
  end

private

  def new_review_params
    params.permit(:rating, :beer_id)
  end

  def update_review_params
    params.permit(:rating)
  end

end
