class AddBudgetIdToBills < ActiveRecord::Migration
  def change
    add_column :bills, :budget_id, :integer
  end
end
