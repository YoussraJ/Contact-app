import React from "react";
import ContactCard from "./ContactCard.js";
import ContactListt from "./ContactListt.css";
import "../fontawesome-free-6.2.0-web/css/all.css";
import { Link } from "react-router-dom"; // curly brackets are necessary when the component are not exported by default
const ContactList=(props)=> {
    const search=(e)=>{
        props.search(e.target.value);
    };
    const ContactListRender=props.contacts.map((contact)=>
    {    
        return <ContactCard contact={contact} />
        
    });

    return (
        
        <div>

            <h2>Contact List</h2>
            <Link to="./add">
            <button>Add Contact</button>
            </Link>
             
            <div>
                <input type="text" placeholder="search" value={props.searchTerm} onChange={search}></input>
                <i className="fa-sharp fa-solid fa-magnifying-glass"></i>
            </div>
           <div>
             {ContactListRender.length>=1 ? ContactListRender :"No contacts available"}
           </div>
           
           
        </div>
    );
}
export default ContactList;