import React from "react";
import con from "../images/contactImag.png" ;
import "../fontawesome-free-6.2.0-web/css/all.css";
import "./contactDetails.css";
import { Link, useLocation } from "react-router-dom";

const ContactDetails=()=>{
    const location=useLocation();
    // console.log(location,"uselOCATION hook");
    const name=location.state.name
    const email=location.state.email
  return(
    <div className="contactDetails">
        <div>
            
            <img src={con} alt="contactImage"/>
            <div>
                <div className="NameEmail"> {name} </div>
                <div className="NameEmail"> {email}</div>
            </div>
        </div>
        <div>
          <Link to={"/"}><button>Back to contact list</button></Link>
        </div>
    </div>
  )
}
export default ContactDetails;