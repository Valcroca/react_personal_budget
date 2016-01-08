class Budgets extends React.Component{
  constructor(props){
    super(props);
    this.state = {budgets: []};
    this.submitBudget = this.submitBudget.bind(this);
  }
  componentDidMount(){
    $.ajax({
      url: '/budgets',
      type: 'GET',
    }).success( data => {
      this.setState({budgets: data.budgets});
    }); 
  }

  submitBudget(){
    $.ajax({
      url: '/budgets',
      type: 'POST',
      data: {budget: {name: this.refs.incomeName.value, amount: this.refs.income.value}}
    }).success( data => {
      let budgets = this.state.budgets;
      budgets.push(data.budget);
      this.refs.incomeName.value = null;
      this.refs.income.value = null;
      this.setState({budgets: budgets});
    });
  }

  render(){
    let budgets = this.state.budgets.map( budget =>{
    let key = `budget-${budget.id}`;
    return(<Budget key={key} {...budget} />);
    });
    return( <div>
              <h1 className='center-text'>Budgets</h1> 
              <input placeholder="Name" ref="incomeName" autoFocus={true} />
              <input placeholder="What's your monthly income?" ref="income" />
              <button className="btn" onClick={this.submitBudget}>Submit</button>
              {budgets}
            </div>
           
              );
  }
}