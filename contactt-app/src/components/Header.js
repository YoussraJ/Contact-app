import react from "react";
const Header = () => 
{
    return(
        <div>
            <div style={{display:'flex',justifyContent:'space-between',padding:'10px 15px'}}>

              <div style={{borderBottom:'none',color:'#fff',fontWeight:'bold',letterSpacing:'1px'}}> MyContacts </div> 
              <div style={{color:'#fff',fontWeight:'revert-layer'}}>a simple contact app</div> 

            </div>
        </div>
    );
}
export default Header;