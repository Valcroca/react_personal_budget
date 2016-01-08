class Bill extends React.Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<div>
             <div className='card blue-grey darken-1'>
               <div className='card-content white-text'>
                 <span className='card-title'>Bill Name: {this.props.name}</span>
                 <p>Cost: {this.props.cost}</p>
               </div>
               <div className='card-action'>
                 <a onClick={this.deleteBill}>Delete</a>
                 <a onClick={this.editBill}>Edit</a>
               </div>
             </div>
          </div>);
        }
}