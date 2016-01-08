json.budgets @budgets do |budget|
  json.id budget.id
  json.name budget.name
  json.amount budget.amount
end