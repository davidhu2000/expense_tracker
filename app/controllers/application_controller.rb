class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception

  helper_method :current_user, :logged_in?

  def login(user)
    session[:session_token] = user.reset_session_token!
    @current_user = user
  end

  def logout
    session[:session_token] = nil
    @current_user = nil
  end

  def current_user
    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def required_to_be_logged_in
    unless logged_in?
      render json: ['Log in required'], status: 401
    end
  end

end
