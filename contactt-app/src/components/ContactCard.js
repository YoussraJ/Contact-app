import React from "react";
import contactImag from "../images/contactImag.png" ;
import "../fontawesome-free-6.2.0-web/css/all.css";
import { Link } from "react-router-dom";
import { MdDelete, MdEdit } from "react-icons/md";
import "./contactCard.css";

// import { useLocation } from "react-router-dom";
const ContactCard=(props)=>{
   const  {id,name,email}=props.contact;
 
   
   return(
    <div className="cardd">
      <img className="iconn" src={contactImag} alt="user"/>
        <div>
        <Link to={`/contact/${id}`} state={{name:name,email:email}} className="link">
        <span>{name}</span>
        <p>{email}</p>
        </Link> 
        </div>
        <div className="iconCard">
        <Link to={`/update/${id}`} state={{contact:props.contact}}>
        <div style={{padding:"3px",backgroundColor:"rgba(0,0,0,.6)",marginRight:"3px"}}>
            <MdEdit
              className="icon "
              color="#54eafe"
              style={{display:'inline-block', zIndex: "1" ,width:"30px"}}
            />
          </div>
        {/* <i className="fa-solid fa-pen-to-square fa-fw fa-2x" ></i> */}
        </Link>
        <Link to={`/delete/${id}`} state={{id:id,namee:name,email:email}}>
        <div style={{padding:"3px",backgroundColor:"rgba(0,0,0,.6)"}}>
            <MdDelete
              
              color="#FF6370"
              className=" icon"
    
              style={{display:'inline-block', zIndex: "1" ,width:"30px"}}
            />
          </div>
        {/* <i className="fa-regular fa-trash-can fa-fw fa-2x" ></i> */}
        </Link>
        </div>
    </div>
   );
   

}
export default ContactCard;