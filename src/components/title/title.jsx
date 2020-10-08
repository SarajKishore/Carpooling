import React from 'react';
import "./title.css";
import {Link} from "react-router-dom";


class TitleP extends React.Component{
    render(){
        return(
            <div>
                <nav className="navbar fixed-top navbar-expand-lg navbar-dark scrolling-navbar">
        <Link to="/" className="navbar-brand"><strong><u>The Carpool</u> </strong></Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                <Link to="/about" className="nav-link">About Us <span className="sr-only">(current)</span></Link>
                </li>
                {/* <li className="nav-item active">
                    <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li> */}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">Link</a>
                </li> */}
                <li className="abc">
                    <Link to="/" className="nav-link" >SignUp</Link>
                </li>
            </ul>
        </div>
    </nav>
                
            </div>
        );
               };
               
};

export default TitleP;