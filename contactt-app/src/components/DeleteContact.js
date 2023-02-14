import React from "react";
import con from "../images/con.png" ;
import "../fontawesome-free-6.2.0-web/css/all.css";
import { Link, useLocation ,useNavigate} from "react-router-dom";

const DeleteContact=(props)=>{
    
 const location=useLocation();
 const navigate=useNavigate();
 console.log(location);

    const name=location.state.name;
    const email=location.state.email;
    const id=location.state.id;
    return(
        <div> 
            <div className="info">
                <div>
                    <div><strong>Are you sure do you want to delete this contact ?</strong></div>
                    <img src={con} alt="imageContact"/>
                    <div>
                    <div className="NameEmail"> {name} </div>
                    <div className="NameEmail"> {email}</div>
                    </div>
                </div>
            </div>
            <div className="YesDelete"><button onClick={()=>{props.removee(id);navigate("/");}}>Yes</button></div>
            <div className="NoDelete"><Link to={"/"}><button>No</button></Link></div>
        </div>
    );
}
export default DeleteContact;