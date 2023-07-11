import React ,{useState , useEffect} from "react";
import { v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Routes , Route } from "react-router-dom";
// import { useNavigate } from "react-router-dom"; 
import Header from "./Header.js";
import { AddContactt } from "./AddContact.js";
import ContactList from "./ContactList.js";
import ContactDetails from "./ContactDetails.js"
import DeleteContact from "./DeleteContact.js";
import Update from "./Update.js";
import NotFound from "./NotFound.js";
import api from "../api/contacts.js";
import "./app.css";
import cercle1 from "./cercle1.svg";
import cercle2 from "./cercle2.svg";
function App() {
  // const key ="contacts"; 
  const [contacts,setContact]=useState([]);
  const [searchTerm ,setSearchTerm]=useState("");
  const [concernedContact,setConcernedContact]=useState([]);
  const searchHandler=(term)=>{
   setSearchTerm(term);
  //  console.log(term);
   if(term!==""){
    const result=contacts.filter((contact)=>{
      return Object.values(contact).join(" ").toLowerCase().includes(term.toLowerCase());
    });
    setConcernedContact(result);
  }
  // else 
  // setConcernedContact(contacts);
    
   };

  
  const retrieveContacts=async ()=>{
   const response= await api.get("contacts");
   return response.data;
  };
  const addContactHandler = async (contact) => {
    // contact.id=uuidv4();
    //   setContact([...contacts, contact ]);
    const request={
      _id:uuidv4(),
      ...contact
    };
    const response=await api.post("contacts",request);
    setContact([...contacts,response.data]);
    
  };

  const update=async(contact)=>{
    
    const response=await api.patch(`contacts/${contact._id}`,contact);
    setContact(contacts.map((contact) =>{
    return contact._id===response.data._id?{...response.data} : contact
    }
    ));
  };

  useEffect(()=>{
  //  const retriveContacts=localStorage.getItem(key);
  //  if(retriveContacts)
  //     setContact(JSON.parse(retriveContacts)); 
    
    const getAllContacts=async ()=> {
      const allContacts= await retrieveContacts();
      if(allContacts) setContact(allContacts);
    }
    getAllContacts();
   } ,[]);



  // useEffect(()=>{
  //   localStorage.setItem(key,JSON.stringify(contacts));

  // },[contacts]);
  
 
 const removeFunction= async (id)=>{
    await api.delete(`contacts/${id}`);
    const newContacts=contacts.filter((contact)=>{
      return contact._id !== id;
    });
    setContact(newContacts);
 };
 
return (
<div className="mainn">
{/* <img src={cercle1} alt="cercle1" className="cirlce1" /> */}
{/* <img src={cercle2} alt="cercle2" className="cirlce2" /> */}
<div className='bubbles'>
        <span style={{'--i': 11}} />
        <span style={{'--i': 12}} />
        <span style={{'--i': 24}} />
        <span style={{'--i': 10}} />
        <span style={{'--i': 14}} />
<span style={{'--i': 23}} />
<span style={{'--i': 18}} />
<span style={{'--i': 16}} />
<span style={{'--i': 19}} />
<span style={{'--i': 20}} />
<span style={{'--i': 22}} />
<span style={{'--i': 25}} />
<span style={{'--i': 18}} />
<span style={{'--i': 21}} />
<span style={{'--i': 15}} />
<span style={{'--i': 13}} />
<span style={{'--i': 26}} />
<span style={{'--i': 17}} />
<span style={{'--i': 13}} />
<span style={{'--i': 28}} />



<span style={{'--i': 11}} />
        <span style={{'--i': 12}} />
        <span style={{'--i': 24}} />
        <span style={{'--i': 10}} />
        <span style={{'--i': 14}} />
<span style={{'--i': 23}} />
<span style={{'--i': 18}} />
<span style={{'--i': 16}} />
<span style={{'--i': 19}} />
<span style={{'--i': 20}} />
<span style={{'--i': 22}} />
<span style={{'--i': 25}} />
<span style={{'--i': 18}} />
<span style={{'--i': 21}} />
<span style={{'--i': 15}} />
<span style={{'--i': 13}} />
<span style={{'--i': 26}} />
<span style={{'--i': 17}} />
<span style={{'--i': 13}} />
<span style={{'--i': 28}} />
</div>
  <Router>
   <Header />
   {/*Routes instead of Switch  (t5arjelek ken  lpage li path mte3ha maktoub f lien  ken lget path ma3adch tzid t7awem) version 6*/}
   {/* element instead of componenet  version 6 */}
   <Routes> 
    {/* inside the routes all things must be inside a  route */}
        {/* for the former version we put exact path not onely path because  without exact if we have two componenets that the first path is "/add" the other is "/addCon"  we can't access to the second path*/}

        {/* Route is to fix paths  */}
        <Route path="/add" element={<AddContactt  addContactHandler={addContactHandler} /> }/>
        <Route path="/" element={<ContactList contacts={ searchTerm.length<1 ? contacts :concernedContact} searchTerm={searchTerm} search={searchHandler} />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/contact/:id" element={<ContactDetails/>}/>
        <Route path="/delete/:id" element={<DeleteContact removee={removeFunction}/> }/>
        <Route path="/update/:id" element={<Update update={update} />} />
      </Routes>
        
 
  </Router>
</div> 
)
}

export default App;

  