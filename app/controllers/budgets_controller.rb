class BudgetsController < ApplicationController
  def index
    @budgets = Budget.all
    render 'index'
  end

  def create
    @budget = Budget.create(budget_params)
    render 'budget'
  end

  private
    def budget_params
      params.require(:budget).permit(:name, :amount)
    end

end
