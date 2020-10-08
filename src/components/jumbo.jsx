import React from 'react';
import "./jumbo.css";
import {Jumbotron, Container } from 'react-bootstrap';

class Jumbos extends React.Component{
    render(){
        return(<div >
            <Jumbotron className="jumbo" fluid>
            <Container >
                 <h1>The CAAAAAAAAAAAAR Pooling</h1>
                <p>
                    Welcome to our Website.
                </p>
                </Container>
                </Jumbotron>
             </div>)
               
               };
};


export default Jumbos;