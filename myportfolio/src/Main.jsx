import React from "react";
import Landingpage from "./Landingpage";
import About from "./About"
import Projects from "./Projects"
import Skills from "./Skills"
import Experience from "./Experience"
import Education from "./Education";
import Menu from "./Menu";

import {Switch,Route, Redirect} from "react-router";
const Main = () =>{
    return(
        <>
        <Menu/>
        <Switch>
            <Route exact path="/" component={Landingpage} />
            <Route exact path="/about" component={About}/>
            <Route exact path="/skills" component={Skills}/>
            <Route exact path="/projects" component={Projects}/>
            <Route exact path="/education" component={Education}/>
            <Route exact path="/experience" component={Experience}/>
            <Route exact path="/interestsandachivements" component={About}/> 
            <Redirect to="/"/>
        </Switch>
        </>
    );
};
export default Main;