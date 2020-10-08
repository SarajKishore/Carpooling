import React from 'react';
import './mainpage.css';
import Kard from './kard';
import SearchBox from './searchbox';

class Exp extends React.Component{
    constructor() {
        super()
        this.state={
            matched: [],
            searchfield:'',
          }
        
    }
    
    componentDidMount(){
      this.getMatched();
    }
  
    getMatched= _=>{
      fetch('http://localhost:4000/query')
      .then(response => response.json())
      .then(response=>this.setState({matched: response.data}) )
      .then(()=>{
        console.log(this.state.matched)
      })
      .catch(err=>console.error(err))
    }
    owner= ({car_owner})=><div>{car_owner}</div>
    rider= ({rider})=><div>{rider}</div>
    phone= ({phone})=><div>{phone}</div>
    model= ({MODEL})=><div>{MODEL}</div>
    start= ({TC_START_TIME})=><div>{TC_START_TIME}</div>
    pickup= ({Pickup_Loaction})=><div>{Pickup_Loaction}</div>

    onSearchChange= (event) =>{
        this.setState({searchfield: event.target.value})
       
    }
  
          render(){
            const {matched}=this.state;
            const filterValues=this.state.matched.filter(match =>{
                return (match.car_owner.toLowerCase().includes(this.state.searchfield.toLowerCase()) || match.rider.toLowerCase().includes(this.state.searchfield.toLowerCase()) )
            })
            return(
                <div>
                    <SearchBox searchChange={this.onSearchChange}/>
                    <Kard rider={matched.map(this.rider)} 
                    matched={filterValues}
                    phone={filterValues.map(this.phone)} 
                    model={filterValues.map(this.model)} 
                    start={filterValues.map(this.start)}
                    owner={filterValues.map(this.owner)}
                    pickup={filterValues.map(this.pickup)}
                     />
                </div>
            );
  }
  };
  
  export default Exp;