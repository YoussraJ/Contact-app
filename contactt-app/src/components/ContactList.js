import React,{useRef,useEffect} from "react";
import ContactCard from "./ContactCard.js";
import  "./contactList.css";
import blob1 from "./blob1.svg";
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
   
      
    const buttonRef = useRef(null);
    let positionInitial;
  
    useEffect(() => {
      positionInitial = buttonRef.current.getBoundingClientRect().top + window.scrollY;
  
      const handleScroll = () => {
        const scrollTop = window.scrollY;
        buttonRef.current.style.top = positionInitial - scrollTop + 'px';
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);
    
    return (
        
        <div className="listt">
            <img src={blob1} alt="blob1" className="circle3" />
            <Link to="./add">
            <button className="btnAdd" ref={buttonRef}>Add Contact</button>
            </Link>
             
            <div className="search">
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