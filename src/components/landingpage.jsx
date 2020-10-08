import React from 'react';
import "./background.css"
import Loginfinal from './login/final_logins';
import Jumbos from './jumbo';
import TitleP from './title/title';


class LandingPage extends React.Component{
    render(){
        return(
           <div>
               <div className="view intro-2">
                   <TitleP/>
                    <Jumbos/>
                    <Loginfinal/>
                </div>
           </div>
        );
    }

}


export default LandingPage;