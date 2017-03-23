require 'rails_helper'

begin
  Api::UsersController
rescue
  Api::UsersController = nil
end

RSpec.describe Api::UsersController, :type => :controller do

  describe 'signup with invalid credentials' do
    it 'should render error if password is too short' do
      post :create, params: { user: { username: 'bad_robot', password: 'short' } }
      expect(response.status).to be 422
    end

    it 'should render error if password is missing' do
      post :create, params: { user: { username: 'robo_gigster', password: '' } }
      expect(response.status).to be 422
    end
  end

  describe 'signup with valid credentials' do
    before(:each) do
      post :create, params: { user: { username: 'robo_gigster', password: 'not_password' } }
      @user = User.find_by_credentials('robo_gigster', 'not_password')
    end

    it 'user exists in database' do
      expect(@user).not_to be_nil
    end

    it 'login the user' do
      expect(session[:session_token]).to eq(@user.session_token)
    end
  end

end
