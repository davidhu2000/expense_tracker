require 'rails_helper'

begin
  UsersController
rescue
  UsersController = nil
end

RSpec.describe UsersController, :type => :controller do

  let!(:valid_user) { User.new(username: "robo_gigster", password: "not_password") }
  let!(:invalid_user) { User.new(username: "bad_robot", password: 'short') }

  describe 'signup with invalid credentials' do
    it 'should render error if password is too short' do
      post :create, user: { username: 'bad_robot', password: 'short' }
      expect(response.status).to be 422
    end

    it 'should render error if password is missing' do
      post :create, user: { username: 'robo_gigster', password: '' }
      expect(response.status).to be 422
    end
  end

  describe 'signup with valid credentials' do
    before(:each) do
      post :create, user: { username: 'robo_gigster', password: 'not_password' }
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
