import React , {Component} from "react";
//useNavigate est un des react hooks donc elle n'est peut etre utilsée que dans "functional componenet" Faite bien attention à ne pa le confondre avec Navigate   
import { useNavigate } from "react-router-dom";
import "./AddContactt.css";
import usericon from "../images/usr.png";
class AddContact extends Component {
      constructor(props){
        super(props);
        this.state = {
          id:"",
          name:"",
          email:"",
          
     };
  
      }  
       
     
    
    
     add =(e)=>{
        
       e.preventDefault(); //this method is to prevent refreshing the page as this is the default event if we press the button 
        if(this.state.name===""||this.state.email==="")
        {
          
        alert("name  or email fields are empty !");
        return;
        }
        else {
        
          this.props.addContactHandler(this.state);
          
        }
           this.setState({name:"",email:""});
           this.props.navigate("/"); //on a pas accès à this.props.history donc 

          

    };
     fullName=(e)=>{this.setState({name:e.target.value})};
    fullEmail=(e)=>{this.setState({email:e.target.value})} ;
   
   render(){
      
        return(
        
        <div className="formm">
          <div>
            <form  onSubmit={this.add}>
             <div className="iconn">  <img
                height="150"
                width="150"
                className=" profile"
                src={usericon} 
              />
              </div>
             <div className="field">
                <label>Name</label>
                <input type="text" name="name" value={this.state.name} onChange={this.fullName}></input>
             </div>
             <div className="field">
                <label>email</label>
                <input type="email" name="email"  value={this.state.email} onChange={this.fullEmail} />
             </div>
             <button className="btn" >Add</button>
            </form>
            </div>
        </div>
       
        );
    }
}
//ce "component" est necessaire pour passer navigate à la classe AddContact pour faire la navigation par programmation (NB this.props.history.push("/lien") valable en version -v6 v6 exclue)
export function AddContactt(props){
 const navigate=useNavigate();// useNavigate is a hook that allows to create a function that'll help a user navigate to a particular page
 return (
  <AddContact navigate={navigate} addContactHandler={props.addContactHandler}/>
 );

}
export default AddContact;