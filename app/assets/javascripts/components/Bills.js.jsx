class Bills extends React.Component{
  
  constructor(props){
    super(props);
    this.state = { bills: [] };
  }
  
  componentDidMount(){
    $.ajax({
      url: '/bills',
      type: 'GET'
    }).success( data => {
      this.setState({ bills: data.bills });
    });
  }

  total(){

  }


  render(){
    return( <div className='container'>
              <input placeholder="What's your monthly income?" ref="income" autoFocus={true} />
              <button className="btn" onClick={this.total}>Submit</button>
              <h3>Your total is: $ {this.state.total} </h3>

            </div>

              );
  }
}