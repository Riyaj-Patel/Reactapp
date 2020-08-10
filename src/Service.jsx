import React from "react";
import Card from "./Card";
import Idata from "./Idata";


const Service = () => {
  return (
    <>
    <div className="my-3 mt-0">
    
    
      <h1 className="text-center">Our Services</h1>
      </div>
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
          {
            Idata.map((val, ind) => {
              return <Card key={ind} 
              imgsrc={val.imgsrc}
              title={val.title}
              />

              
            })
          }
          </div>
          </div>
          </div>
  

    
    </>

    );


};


export default Service;