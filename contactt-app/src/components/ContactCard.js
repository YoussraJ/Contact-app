import React from "react";
import user from "../images/user.png" ;
import "../fontawesome-free-6.2.0-web/css/all.css";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const ContactCard=(props)=>{
   const  {id,name,email}=props.contact;
 
   
   return(
    <div className="item">
      <img className="iconn" src={user} alt="user"/>
        <div>
        <Link to={`/contact/${id}`} state={{name:name,email:email}} className="link">
        <div>{name}</div>
        <div>{email}</div>
        </Link> 
        </div>
        <div className="icon">
        <Link to={`/update/${id}`} state={{contact:props.contact}}>
         
        <i className="fa-solid fa-pen-to-square fa-fw fa-2x" ></i>
        </Link>
        <Link to={`/delete/${id}`} state={{id:id,namee:name,email:email}}>
        <i className="fa-regular fa-trash-can fa-fw fa-2x" ></i>
        </Link>
        </div>
    </div>
   );
   

}
export default ContactCard;