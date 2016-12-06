class ApplicationController < ActionController::Base


  private

  def current_user
    @current_user ||= User.find_by(api_token: params[:api_token])
  end

  def logged_in?
    current_user
  end

  def logged_out?
    !current_user
  end

  def require_login
    if logged_out?
      render json: ["You must be logged in"], status: :forbidden
    end
  end

  def forbid_login
    if logged_in?
      render json: ["You must be logged in"], status: :forbiddenend
    end
  end




end
