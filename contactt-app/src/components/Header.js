import react from "react";
const Header = () => 
{
    return(
        <div style={{backgroundColor:'rgba(0,0,0,.3)',width:'100vw',position:'fixed',top:'0',zIndex:'2'}}>
            <div style={{display:'flex',justifyContent:'space-between',padding:'10px 15px'}}>

              <div style={{borderBottom:'none',color:'#fff',fontWeight:'bold',letterSpacing:'1px'}}> MyContacts </div> 
              <div style={{color:'#fff',fontWeight:'revert-layer'}}>a simple contact app</div> 

            </div>
        </div>
    );
}
export default Header;