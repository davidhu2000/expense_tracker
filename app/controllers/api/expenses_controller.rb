class Api::ExpensesController < ApplicationController
  before_filter :required_to_be_logged_in
  before_action :get_expense, only: [:show, :update, :destroy]
  before_action :require_user_to_be_owner, only: [:update, :destroy]

  def index
    @expenses = current_user.expenses
    render 'api/expenses/index'
  end

  def create
    @expense = Expense.new(expense_params)
    @expense.user_id = current_user.id
    if @expense.save
      render json: "api/expenses/show"
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def show
  end

  def update
    if @expense.update(expense_params)
      render json: "api/expenses/show"
    else
      render json: @expense.errors.full_messages, status: 422
    end
  end

  def destroy
    @expense.destroy

    render json: @expense
  end


  private

  def get_expense
    @expense = current_user.expenses.find(params[:id])
  end

  def expense_params
    params.require(:expense).permit(:amount, :expense_date, :description)
  end

  def require_user_to_be_owner
    unless current_user.id == @expense.user_id
      render json: ['Cannot edit expense unless you are the owner'], status: 401
    end
  end
end
