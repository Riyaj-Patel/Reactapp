import React from "react";
import './index.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Service from "./Service.jsx";
import Contact from "./Contact.jsx";
import Nevbar from "./Nevbar.jsx";
import Footer from "./Footer.jsx";
import {Switch, Route, Redirect} from "react-router-dom";

const App = () => {
  return (
    <>
    <Nevbar />
    <Switch>
        <Route exact path="/"  component={Home}    />
         <Route exact path="/about"  component={About}    />
          <Route exact path="/service"  component={Service}    />
           <Route exact path="/contact"  component={Contact}    />
           <Redirect to="/" />
    </Switch>
    <Footer />
    </>

    );


};


export default App;