import React from "react";


const Contact = () => {
  return (
    <><div className="my-3 mt-0">
      <h1 className="text-center">Contact Us</h1>
    </div>
      <div className="container">
        <form>
          <div className="row a1 form-row">
            <div className="form-group col-md-4">
              <label for="inputEmail4">Email</label>
              <input type="email" className="form-control" id="inputEmail4" placeholder="Email" />
            </div>
            <div className="form-group col-md-4">
              <label for="inputPassword4">Password</label>
              <input type="password" className="form-control" id="inputPassword4" placeholder="Password" />
            </div>
          </div>
          <div className="row a1 form-row">
          <div className="form-group col-md-4">
            <label for="inputAddress">Address</label>
            <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
          </div>
          <div className="form-group col-md-4">
            <label for="inputAddress2">Address 2</label>
            <input type="text" className="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor" />
          </div>
          </div>
          
          <div className="row form-row a1">
            <div className="form-group col-md-3">
              <label for="inputCity">City</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="form-group col-md-3">
              <label for="inputState">State</label>
              <select id="inputState" className="form-control">
                <option selected>Choose...</option>
                <option>...</option>
              </select>
            </div>
            <div className="form-group col-md-2">
              <label for="inputZip">Zip</label>
              <input type="text" className="form-control" id="inputZip" />
            </div>
          </div>
          <div className= "row form-row a1 mt-3">
          <div className="form-group col-md-2">
          <button type="submit" className="btn btn-primary">Contact now!!</button></div>
          </div>
          
        </form>


      </div>
      


    </>

  );


};

export default Contact;