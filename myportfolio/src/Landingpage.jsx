import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"; 
import "./index.css";
import Menu from "./Menu"
function Landingpage(){
    return (<>
        
           
            <div class='home'>
                <div className='landing-text'>
  
                    <h1 className='c1 display-4 font-weight-bold'>Hi, I am <span>Ashutosh Bansal</span></h1>
                    <h4 className='title'>And I am a <span>SOFTWARE ENGINEER</span></h4>
                    <br></br>
                    <br></br>
                    <br></br>
                    {/* <a href='https://www.linkedin.com/in/ashutosh-bansal-236bb0185/' target = "_blank" class='fa fa-linkedin'></a>
                    <a href='https://github.com/Ashutosh2302' target = "_blank" class='fa fa-github'></a> */}
                </div>
            </div>

  
    </>
    )
}

export default Landingpage;