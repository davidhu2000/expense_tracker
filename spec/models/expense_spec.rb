require 'rails_helper'

begin
  Expense
rescue
  Expense = nil
end

RSpec.describe Expense, type: :model do
  it { should validate_presence_of(:user_id) }
  it { should validate_presence_of(:expense_date) }
  it { should validate_presence_of(:amount) }
  it { should validate_presence_of(:description) }
  it { should belong_to(:user) }
end
