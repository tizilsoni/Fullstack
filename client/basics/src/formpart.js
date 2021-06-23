import React from 'react';
import './forms.css'


function Formpart(props){
  return(
        <div className="col-md-4 mt-5 mr-5 ml-5">
          <div className="formbackground">
            <div className="skew-up-background"></div>
            <h1 className="text-center white-text mt-2">Insert {props.text}</h1>
            <form>
              <div className="form-group mt-4">
                <label className="white-text" for="instrument_name">{props.text} Name</label>
                <input type="text" className="form-control" id="instrument_name" placeholder="Enter Name"/>
              </div>
              <div className="form-group mt-4">
                <label className="white-text" for="description">Description</label>
                <input type="text" className="form-control" id="description" placeholder="About"/>
              </div>
              <div className="form-group mt-4">
                <label className="white-text" for="risk">Risk</label>
                <input type="text" className="form-control" id="risk" placeholder="Risk Involved"/>
              </div>
              <div className="text-center mt-5">
                  <button type="submit" className="btn formsubmitbtn">Submit</button>
              </div>
            </form>             
          </div>
        </div>

  )
}

export default Formpart;