class AddDatetimeToExpenses < ActiveRecord::Migration[5.0]
  def change
    add_column :expenses, :expense_date, :datetime 
  end
end
