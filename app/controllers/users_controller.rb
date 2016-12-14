class UsersController < ApplicationController

  before_action :require_login, only: [:my_reviews, :follow, :followees]
  # requires user to sign in before the leaving reviews(rating),etc
  def show
    @user = User.find(params[:id])
    render json: @user
  end
  # Find a User by id
  def all
    @user = User.all
    render json: @user, scope: current_user, scope_name: :current_user
  end
  # All users_had to cut social due to time
  def log_in
    @user = User.find_by(email: params[:email]).try(:authenticate, params[:password])
      if @user.present?
        render json: @user, serializer: LoginSerializer
      else
        render json: ["User not found"]
      end
  end
  # Login method_sending to LoginSerializer
  def sign_up
    @user = User.new(user_params)
      if @user.save
        UserEmailMailer.send_signup_email(@user).deliver
        render json: @user, serializer: LoginSerializer
      else
        render json: @user.errors.full_messages
      end
  end
  # Signip method_sending to LoginSerializer
  def follow
    current_user.toggle_follow!(User.find(params[:id]))
    render json: current_user
  end
  def followees
    @followees = current_user.followees(User)
    render json: @followees
  end
  # Had to cut social due to time_not in use
  private

   def user_params
     params.permit(:email, :password, :images, :name)
   end

end
