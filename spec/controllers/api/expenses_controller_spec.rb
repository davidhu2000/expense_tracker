require 'rails_helper'

begin
  Api::ExpensesController
rescue
  Api::ExpensesController = nil
end

RSpec.describe Api::ExpensesController, type: :controller do
  let(:user) { User.create!(username: 'gig_robo', password: 'password')}

  describe "create expense" do

    before do
      allow(controller).to receive(:current_user) { user }
    end

    context "with invalid params" do
      it "validates the presence of title and body" do
        post :create, params: { expense: {description: "this is invalid"} }
        expect(response.status).to be 422
      end
    end

    context "with valid params" do
      it "redirects to the tweet show page" do
        post :create, params: { expense: {user_id: 1, amount: 20.99, description: 'expense', expense_date: '12/12/12'} }
        expect(response.status).to be 200
      end
    end
  end

  describe "get all expenses" do

    before do
      allow(controller).to receive(:current_user) { user }
    end

    it "renders index" do
      get :index, params: { expenses: {} }
      expect(response.status).to be 200
    end

  end

  describe "update expense" do
    context "when logged in as a different user" do
      create_user_with_expense

      before do
        allow(controller).to receive(:current_user) { user }
      end

      it "should not allow users to update another users expenses" do
        begin
          patch :update, params: { id: gig_expense, expense: { amount: 100 } }
        rescue ActiveRecord::RecordNotFound
        end
      end
    end
  end

end
