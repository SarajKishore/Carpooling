import React from 'react';
import "./style.css";
var Scroll = require('react-scroll');
var scroll = Scroll.animateScroll;
 



class About extends React.Component{
    constructor(props) {
        super(props);
        this.scrollToTop = this.scrollToTop.bind(this);
      }
      scrollToTop() {
        scroll.scrollToTop();
      }
        render(){
          return(
            <div>
              
<body>
    <section>
        <div class="content">
            <h2> The Caaaaaaarpooling</h2>
            <br/> <br/>
            <h3>What is Carpooling ?</h3>
            <br/> <br/>
            <p> 
                    Carpooling is the sharing of car journeys so that more than one person travels in a car, and prevents the need for others to have to drive to a location themselves.
                    <br/> By having more people using one vehicle, carpooling reduces each person's travel costs such as: fuel costs, tolls, and the stress of driving <br/> (source: wikipedia.org)
            </p>
        </div>
    </section>
    <section>
            <div class="content">
                <h2> <u> About the project </u></h2>
                <br/> <br/>
                <h3>What is this project for ?</h3>
                <br/> <br/>
                <p> 
                        This project is dedicated to our teaching faculty. <br/>
                        The Aim of this project is provide a medium for the teachers to reach the college in a more eco-friendly way and that is by their participation in a carpooling ecosystem.
                        <br/>
                        This website will help our teachers to find the best ride to the college by carpooling with other fellow teachers.
                </p>
            </div>
        </section>

        <section>
                <div class="content">            
                    
                    <h2><u>Inside the project </u></h2>
                    <br/> <br/>
                    <h3>What is the recipe of this project?</h3>
                    <br/> <br/>
                    <p> 
                            This Project is made using Reactjs for the frontend containing perfect mixture of HTML, CSS, JavaScript with sprinkle of Bootstrap and SCSS.
                           <br/>
                            For the backend we have carefully used the Nodejs along with Expressjs and cors which provides us with perfect connectivity.
                            <br/>
                            And finally for the database we have used MySQL using workbench which stores all the datas of the teachers, the cars and their private information.
                           <br/>
                            At the end what we get is a beautiful dynamic website for our teachers to enjoy :)
                    </p>
                </div>
            </section>

            <section>
                <div class="content">            
                    
                    <h2>About us</h2>
                    <br/> <br/>
                    <h3>It's me Saraj Kishore</h3>
                    <br/> <br/>
                    <p> 
                            Hi, I'm Saraj Kishore one of the creator ofthis project.
                            <br/>
                    </p>
                    <h3>Facts about Saraj Kishore (if you want)</h3>
                    <br/>
                    <br/>
                    <p>
                        <ul>
                        <li>Currently Studying in 3rd year information Science Branch of college DSATM .
                        <br/> <br/></li>
                        <li>Can be contacted any time via his email <u>sarajkishore@gmail.com</u> .
                        <br/> <br/></li>
                        <li>Claims to be Batman but no evidence found regarding to that claim .
                        <br/><br/></li>
                        <li>Can be found in front of his good ol' laptop either coding, gaming or gaining facts useless to others <br/> (which he will tell you randomly when he is bored) .
                        <br/><br/></li>
                        </ul>
                        
                    
                    </p>
                </div>
            </section>

            <section>
                <div class="content">            
                <h6 onClick={this.scrollToTop}>That's all folks.<br/> click to read it all again </h6>
                </div>
            </section>
</body>
            </div>
          );
        }

      };

export default About;