import React from "react";
import { Link } from "react-router-dom";
import web from "../src/img1.jpg";
import Common from "./Common";

const Home = () => {
  return (
    <>
   <Common 
   name="Grow your Bussiness with"
   imgsr={web}
   visit="/service"
   btname="Get Started!"
   />
    </>

    );


};


export default Home;