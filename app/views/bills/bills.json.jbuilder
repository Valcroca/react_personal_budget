json.bills @bills do |bill|
  json.name bill.name
  json.cost bill.cost
  json.budget Budget.find(bill.budget_id).name
end

json.budgets @budgets do |budget|
  json.id budget.id
  json.name budget.name
  json.amount budget.amount
end