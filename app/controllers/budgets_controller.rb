class BudgetsController < ApplicationController
  def index
    @budget = Budget.all
    render json: {budget: @budget}
  end

  def create
  end

  private
    def budget_params
      params.require(:budget).permit(:name, :amount)
    end

end
