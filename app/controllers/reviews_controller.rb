class ReviewsController < ApplicationController
  before_action :require_login, only: [:create, :update]

  def create
    @review = Review.new(review_params)
    @review.user = current_user
    if @review.save
      render json: @review
    else
      render json: @review.user.errors.full_messages, status: 422
    end
  end

  def show
    @review = Review.find(params[:id])
    render json: @review
  end

  def update
    @review = Review.find_by(token: params[:token])
    @review.update!(review_params)
    if @review.save
      render json: @review
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  def my_ratings
    @my_ratings = current_user.reviews.order('created_at DESC')
    render json: @my_ratings
  end

  private

  def review_params
    params.permit(:rating, :beer_id)
  end
end
