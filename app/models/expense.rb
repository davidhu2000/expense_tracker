class Expense < ApplicationRecord
  validates :user_id, presence: true
  validates :expense_date, presence: true
  validates :amount, numericality: true, presence: true
  validates :description, presence: true

  belongs_to :user
end
