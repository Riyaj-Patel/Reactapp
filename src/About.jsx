import React from "react";
import { Link } from "react-router-dom";
import web from "../src/img1.jpg";
import Common from "./Common";

const About = () => {
  return (
    <>
    <Common 
    name="Welcome to About page"
    imgsr={web}
    visit="/contact"
    btname="contact now!"
    />
    </>

    );


};


export default About;