class BillsController < ApplicationController
  def index
    @bills = Bill.all.order(created_at: :desc)
    render json: {bills: @bills}
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
    params.require(:bill).permit(:name, :cost)
  end
end
