class BillsController < ApplicationController
  def index
    @bills = Bill.all.order(created_at: :desc)
    @budgets = Budget.all
    render 'bills'
  end

  def create
    @bill = Bill.create(bill_params) 
    render 'bill'
  end

  def update
    
  end

  def destroy
    
  end

  private

  def bill_params
    params.require(:bill).permit(:name, :cost, :budget_id)
  end
end
