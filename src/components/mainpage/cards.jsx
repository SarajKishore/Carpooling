import React from 'react';
import './mainpage.css';

class Cards extends React.Component{

    state={
      products: [],
      matched: []
    }
  
    componentDidMount(){
      this.getProducts();
      this.getMatched();
    }
  
    getProducts= _=>{
      fetch('http://localhost:4000/products')
      .then(response => response.json())
      .then(response=>this.setState({products: response.data}) )
      // .then(({data})=>{
      //   console.log(data)
      // })
      .catch(err=>console.error(err))
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
    
  
    renderProduct= ({T_ID,T_NAME,T_PHONE})=><div key={T_ID}>{T_NAME}   {T_PHONE}</div>
    renderMarched= ({car_owner})=><div>{car_owner}</div>
    rider= ({rider})=><div>{rider}</div>
    phone= ({phone})=><div>{phone}</div>
    model= ({MODEL})=><div>{MODEL}</div>
    start= ({TC_START_TIME})=><div>{TC_START_TIME}</div>
    pickup= ({Pickup_Loaction})=><div>{Pickup_Loaction}</div>
  
          render(){
            const {products,matched}=this.state;
            return(
              <div>
                  <div class="conatiner">
  <div class="wrap">
      
      <div class="box one">
          <div class="date">
              <h4>Pickup @ {matched.map(this.start)}</h4>
          </div>
          <h1>Owner: {matched.map(this.renderMarched)}</h1>
      <div class="date">
              <h4>Location: {matched.forEach(this.pickup)}</h4>
          </div>
      <div class="date">
              <h4>Car: {matched.map(this.model)}</h4>
          </div>
      <h1>Rider: {matched.map(this.rider)}</h1>	
      <h1>Owner phone: {matched.map(this.phone)}</h1>	
      </div>
  </div>
  </div>
  </div>
   );
  }
  };
  
  export default Cards;