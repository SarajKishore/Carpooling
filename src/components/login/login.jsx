/* eslint-disable no-useless-constructor */
import React from 'react';
import LoginImg from '../../login.svg';
import {Link} from "react-router-dom";

export class Login extends React.Component
{
    constructor(props){ 
        super(props);
        this.state = {
            username: "",
            password: "",   
            fetchdata:"",
            permission:0,
          };
          this.handleChange = this.handleChange.bind(this)
   }

   componentDidMount(){
    this.getMatched();
  }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
     };
    render(){
        return(
        <div className="base-container" ref={this.props.containerRef}>
            <div className="header">Carpooling Login</div>
            <div className="content">
                <div className="image">
                    <img src={LoginImg} alt=""/>
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password" onChange={this.handleChange}/>
                    </div>                    
                </div>
            </div>
            <div className="footer">
                <Link to="/mainpage">
                <button type="button" className="btn" onClick={this.verify}>
                Login
                </button>
                </Link>
            </div>
        </div>
        )
    }

    verify=()=>{
        const username= this.state.username;
        const passwords= this.state.password;
        const fetchdata =this.state.fetchdata;
        var ok=0

        for(let i=0;i<fetchdata.length;i++){
            if(passwords===fetchdata[i].password && username===fetchdata[i].user){
                ok=++ok
                console.log(ok)
                this.setState({[this.state.permission] :ok}, () => {
                    console.log(this.state.permission)});
                return 0 
            }

            else{
                console.log("Not successfull")
            }
        }
    
    }
    getMatched= _=>{
        fetch('http://localhost:4000/pass')
        .then(response => response.json())
        .then(response=>this.setState({fetchdata: response.data}) )
        .catch(err=>console.error(err))
      }
}
