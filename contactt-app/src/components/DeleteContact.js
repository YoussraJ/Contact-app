import React from "react";
import con from "../images/usr.png" ;
import "../fontawesome-free-6.2.0-web/css/all.css";
import "./delete.css";
import { Link, useLocation ,useNavigate} from "react-router-dom";

const DeleteContact=(props)=>{
    
 const location=useLocation();
 const navigate=useNavigate();
 console.log(location);

    const name=location.state.namee;
    console.log(name);
    const email=location.state.email;
    const id=location.state._id;
    return(
        <div className="delete"> 
            <div className="info">
                <div>
                    
                    <img src={con} alt="imageContact"/>
                    <div>
                    <div className="NameEmail"> {name} </div>
                    <div className="NameEmail"> {email}</div>
                    </div>
                </div>
            </div>
            <p>you want to delete this contact?</p>
            <div className="btnn">
            <div className="YesDelete"><button onClick={()=>{props.removee(id);navigate("/");}}>Yes</button></div>
            <div className="NoDelete"><Link to={"/"}><button>No</button></Link></div>
            </div>
        </div>
    );
}
export default DeleteContact;