import React from "react";
import { useState } from "react";
import { useLocation ,useNavigate } from "react-router-dom";
const Update=(props)=>{
    const location=useLocation();
    const navigate=useNavigate();
    const [contact,setContact]=useState(location.state.contact);
    
    const fullName=(e)=>{
       setContact({id:contact.id,name:e.target.value,email:contact.email});
    };
    const fullEmail=(e)=>{
      setContact({id:contact.id,name:contact.name,email:e.target.value});
    };
  
     const update=(e)=>{
        
        e.preventDefault(); //this method is to prevent refreshing the page as this is the default event if we press the button 
         if(contact.name===""||contact.email==="")
         {
           
         alert("name  or email fields are empty !");
         return;
         }
         else {
         
           props.update(contact);
           
         }
          
          navigate("/"); //on a pas accès à this.props.history donc 
 
           
 
     };
    return(
        <div className="formm">
        <div>
          <h1>Update Contact </h1>
          <form  onSubmit={update}>
           <div className="field">
              <label>Name:</label>
              <input type="text" name="name" placeholder={contact.name} value={contact.name} onChange={fullName}></input>
           </div>
           <div className="field">
              <label>E-mail:</label>
              <input type="email" name="email" placeholder={contact.email} value={contact.email} onChange={fullEmail} />
           </div>
           <button className="btn" >Update</button>
          </form>
          </div>
      </div>
    );
}
export default Update;