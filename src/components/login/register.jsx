/* eslint-disable no-useless-constructor */
import React from 'react';
import LoginImg from '../../login.svg';

class Register extends React.Component
{
    constructor(props){ 
        super(props);
        this.state = {
            selectedOption: "",
            username: "",
            email: "",
            phone: "",
            password:"",
            startingloc:"",
            via1:"",
            via2:"",
            time:"",
            disabled: false,
            model:"",
            car_reg:"",
            capacity: 0          
          };
          this.handleChange = this.handleChange.bind(this)
   }


    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };

    uname=()=>{                                            //stores state values into a constant
        const option=this.state.selectedOption;
        if(option==="yes"){
            this.withCar()
            this.cars()
            this.password()
        }
        
        if(option==="no"){
            this.withoutCar()
            this.password() 
        }
    }
withoutCar(){
        const NAME= this.state.username;
        const PHONE =this.state.phone;
        const PICKUP=this.state.startingloc;
        const START_TIME=this.state.time;
        

        console.log(NAME);
        console.log(PHONE);
        console.log(PICKUP);
        console.log(START_TIME);

    fetch(`http://localhost:4000/products/add?NAME=${NAME}&PHONE=${PHONE}&PICKUP=${PICKUP}&START_TIME=${START_TIME}`)
    .then((res)=>{
        console.log(res)
    })
}

withCar(){
        const NAME= this.state.username;
        const PHONE =this.state.phone;
        const VIA=this.state.via1;
        const VIA2=this.state.via2;
        const START_TIME=this.state.time
        const START=this.state.startingloc;
        const CAR_REG=this.state.car_reg

        fetch(`http://localhost:4000/withcar/add?NAME=${NAME}&PHONE=${PHONE}&START_TIME=${START_TIME}&CAR_REG=${CAR_REG}&START=${START}&VIA=${VIA}&VIA2=${VIA2}`)
        .then((res)=>{
            console.log(res)
        })
        .then((res)=>{
            console.log(res)
            console.log(CAR_REG)
        })
}

cars(){
        const CAR_REG=this.state.car_reg
        const CAPACITY=this.state.capacity
        const MODEL= this.state.model

        fetch(`http://localhost:4000/cars/add?CAR_REG=${CAR_REG}&MODEL=${MODEL}&CAPACITY=${CAPACITY}`)
        .then((res)=>{
            console.log(res)
        })

}

password(){
    const user=this.state.username;
    const password= this.state.password;
    fetch(`http://localhost:4000/pass/add?user=${user}&password=${password}`)
    .then((res)=>{
        console.log(res)
    })

}
    

    render(){   
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email" onChange={this.handleChange}/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    </div>      
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="text" name="phone" placeholder="phone" onChange={this.handleChange}/>
                    </div>     

                    <div className="form-group">
                        <label htmlFor="start">Your Starting Location</label>
                        <input type="text" name="startingloc" placeholder="starting location" onChange={this.handleChange} 
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="time">Time</label>
                        <input type="text" name="time" placeholder="time" onChange={this.handleChange} />
                    </div>

                    <div className="form-group">
                        <label htmlFor="car">Have a Car ?</label>
                            <label>
                                <input className="radio"
                                type="radio"
                                value="yes"
                                checked={this.state.selectedOption === "yes"}
                                onChange={this.handleOptionChange}
                                /> yes
                            </label>                           
                            <label>
                                <input
                                type="radio"
                                value="no"
                                checked={this.state.selectedOption === "no"}
                                onChange={this.handleOptionChange}
                                /> no
                            </label>   
                    </div>  

                    <div className="form-group">
                        <label htmlFor="*">No need to fill if you don't own a car</label>
                    </div>

                    <div className="form-group">
                        <label htmlFor="model">Car Model</label>
                        <input type="text" name="model" placeholder="Ex. Audi R8"onChange={this.handleChange} disabled={this.state.disabled}/>
                    </div>


                    <div className="form-group">
                        <label htmlFor="car_reg">Car Registration Number</label>
                        <input type="text" name="car_reg" placeholder="Ex. BR01 8011"onChange={this.handleChange} disabled={this.state.disabled}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="capacity">Capacity</label>
                        <input type="text" name="capacity" placeholder="Ex. Maruti Alto has capacity 4"onChange={this.handleChange} disabled={this.state.disabled}/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="loc1">Via Location 1</label>
                        <input type="text" name="via1" placeholder="location 1"onChange={this.handleChange} disabled={this.state.disabled}/>
                    </div> 

                    <div className="form-group">
                        <label htmlFor="loc2">Via Location 2</label>
                        <input type="text" name="via2" placeholder="location 2" onChange={this.handleChange} disabled={this.state.disabled}/>
                    </div> 

                     

                </div>
            </div>
                <div className="footer">
                <button type="submit" className="btn" onClick={this.uname}>
                
                     Register
               
                </button>
                
            </div>
            
        </div>
        )
    }
   
      handleOptionChange = changeEvent => {
        this.setState({
          selectedOption: changeEvent.target.value
        });
        this.disabling()       
      };
      disabling(){
        if(this.state.selectedOption==="yes")
        this.setState({disabled: true})
    else
        this.setState({disabled: false})
    console.log(this.state.disabled)
      }
      
}
export {Register};
