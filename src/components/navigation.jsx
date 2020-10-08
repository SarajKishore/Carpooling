import React from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import MainPage from './mainpage/mainpage';

class Nav extends React.Component{
        render(){
          return(
            <Router>
                <div>
                    <Route path="/" exact component={LandingPage} />
                    <Route path="/about" exact component={About}/>
                    <Route path="/mainpage" exact component={MainPage} />
                </div>
            </Router>
          );
        }

      };

export default Nav;