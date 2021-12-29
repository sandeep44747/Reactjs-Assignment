import React from "react";
import {Typography,CssBaseline,Toolbar,AppBar} from "@material-ui/core"
import {PhotoCamera} from "@material-ui/icons";
import { Instagram } from "@material-ui/icons";
const Header=()=>{
    return(<>
      <CssBaseline/>
      <AppBar position="relative" style={{background:"white",borderRadius:"10px"}} >
        <Toolbar style={{background:"pink",marginTop:"20px"}}>
            <Instagram className="insta" style={{fontSize:"50px",color:'red'}}/>
            <Typography variant="h5" id="instaname" style={{color:"#24497D"}}>InstaClone</Typography>
            <PhotoCamera className="camera" style={{fontSize:"50px",color:"#24497D"}}/>
        </Toolbar>

      </AppBar> 
    </>

    )
}
export default Header;