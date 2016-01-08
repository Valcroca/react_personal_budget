class Budget extends React.Component{
  constructor(props){
    super(props);
    this.state = {budget: []};
  }

  render(){
    return(    
                 <div className='card grey darken-1'>
                   <div className='card-content black-text'>
                     <span className='card-title'>Budget Name: {this.props.name}</span>
                     <p>Amount: {this.props.amount}</p>
                   </div>
                   <div className='card-action'>
                     <a onClick={this.deleteBudget}>Delete</a>
                     <a onClick={this.editBudget}>Edit</a>
                   </div>
                 </div>
               
         );
  }
}