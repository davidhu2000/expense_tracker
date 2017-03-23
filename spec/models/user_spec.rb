require 'rails_helper'

begin
  User
rescue
  User = nil
end

RSpec.describe User, type: :model do

  it { should validate_presence_of(:username) }
  it { should validate_presence_of(:session_token) }
  it { should validate_presence_of(:password_digest) }
  it { should validate_length_of(:password).is_at_least(6) }
  it { should have_many(:expenses) }

  describe 'encrypting password' do
    it 'uses BCrypt to encryp the password' do
      expect(BCrypt::Password).to receive(:create)
      User.new(username: 'robo_gigster', password: 'not_password')
    end

    it 'should not save the password to database' do
      User.create!(username: 'robo_gigster', password: 'not_password')
      user = User.find_by(username: 'robo_gigster')
      expect(user.password).not_to be ('not_password')
    end
  end

  describe 'admin users' do
    it 'should default admin to false' do
      User.create!(username: 'robo_gigster', password: 'not_password')
      user = User.find_by(username: 'robo_gigster')
      expect(user.admin).to be false
    end

    it 'should be true if set to be true' do
      User.create!(username: 'robo_gigster', password: 'not_password', admin: true)
      user = User.find_by(username: 'robo_gigster')
      expect(user.admin).to be true
    end
  end

end
