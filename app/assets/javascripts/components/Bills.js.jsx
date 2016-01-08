class Bills extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { bills: [] };
    this.submitBill = this.submitBill.bind(this);
    this.submitBudget = this.submitBudget.bind(this);
  }
  
  componentDidMount(){
    $.ajax({
      url: '/bills',
      type: 'GET'
    }).success( data => {
      this.setState({ bills: data.bills });
    });
  }

  submitBudget(){
    debugger
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

  submitBill(){
    $.ajax({
      url: '/bills',
      type: 'POST',
      data: {bill:{name: this.refs.name.value, cost: this.refs.cost.value}}
    }).success( data => {
      let bills = this.state.bills;
      bills.push(data.bill);
      this.refs.name.value = null;
      this.refs.cost.value = null;
      this.setState({bills: bills});
    });
  }

  deleteBill(){

  }

  editBill(){

  }

  render(){
    let bills = this.state.bills.map( bill =>{
    let key = `bill-${bill.id}`;
    return(<Bill key={key} {...bill} />);
    });


    return( <div className='container'>
              <h1 className='center-text'>Bills</h1>
              <input placeholder="Add Bill Name Here" ref="name" /><input placeholder="due" ref="cost" />
              <button className="btn" onClick={this.submitBill}>Submit</button>
              {bills}
            </div>
           
              );
  }
}