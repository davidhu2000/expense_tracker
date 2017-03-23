require 'rails_helper'

begin
  SessionsController
rescue
  SessionsController = nil
end

RSpec.describe Api::SessionController, type: :controller do

  let!(:user) { User.create(username: "robo_gigster", password: "not_password") }

  describe 'login with invalid credentials' do
    it 'should render error if user does not exist' do
      post :create, user: { username: 'robo_other', password: 'password' }
      expect(response.status).to be 401
    end

    it 'should render error if password is incorrect' do
      post :create, user: { username: 'robo_gigster', password: 'password' }
      expect(response.status).to be 401
    end
  end

  describe 'login with valid credentials' do
    it 'login the user' do
      post :create, user: { username: 'robo_gigster', password: 'not_password' }
      expect(session[:session_token]).to eq(user.session_token)
    end
  end

  describe 'logout' do
    before(:each) do
      post :create, user: { username: 'robo_gigster', password: 'not_password' }
    end

    it 'logs out the user' do
      delete :destroy
      expect(session[:session_token]).to be_nil
    end
  end
end
