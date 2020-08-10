import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {NavLink} from "react-router-dom";
const Nevbar = () => {
  return (
    <>
    <div className="container">
          <div className="row ml-1">
            <div className="col-11 mx-auto ml-0">
              <nav className="navbar navbar-expand-lg">
                <div className="container">
                <NavLink className="navbar-brand" to="/">Imperial</NavLink>
                <button 
                className="navbar-toggler"
                type="button"
                data-toggle="collapse" 
                data-target="#navbarSupportedContent" 
                aria-controls="navbarSupportedContent"
                aria-expanded="false" aria-label="Toggle navigation">
                <span
                className="navbar-toggler-icon">
                </span>
                </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto mr-1">
                <li className="nav-item active">
                  <NavLink activeClassName='menu' exact  className="nav-link" to="/">Home <span className="sr-only">(current)</span></NavLink>
                </li> 
                <li className="nav-item">
              <NavLink exact activeClassName='menu' className="nav-link" to="/service">Services</NavLink>
                </li>
                <li className="nav-item">
              <NavLink exact activeClassName='menu' className="nav-link" to="/about">About</NavLink>
                </li>
                <li className="nav-item">
              <NavLink exact activeClassName='menu' className="nav-link" to="/contact">Contact</NavLink>
                </li>
              </ul>
            </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
    </>
    );
};
export default Nevbar ;  