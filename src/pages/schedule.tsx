import * as React from "react";
import Doddle from "../images/sunshine_9.jpg";
import SendIcon from '@mui/icons-material/Send';
import * as styles from "../components/css/schedule.module.css";
import Logo from "../images/logo.png";
import { Fab } from "@mui/material";
function Schedule() {
  return (
    <div style={{height:"100vh"}}>
      {/* Header for my component */}
      <div className="Header" style={{overflowX:'hidden'}}>
        <div
          className={styles.ColourThis}
          style={{ height: "15vh", background: "#F2BA49" }}
        />
        <img alt="Sunshine IITH" src={Logo} className={styles.image}/>
      </div>
        <div style={{marginTop:'-56px'}}>
        <h1 style={{textAlign:"center", width:"96%", margin:"0 auto"}}>Meet with our counsellors</h1>
        <img alt="Sunshine IITH"
          src={Doddle}
          style={{
            all: "revert",
            display: "block",
            margin: "10px auto",
            width:"88vw",
          }}
        />
        <p style={{textAlign:"center", width:"90%", margin:"15px auto"}}>Come over and meet one of us. Let us sit back, relax and have a chat about what is on your mind.</p>
        </div>
      {/* </div> */}
      <div style={{display:"flex",alignItems:"center",justifyContent:"center"}}>
        <Fab variant="extended" href="/slotconfirmation" sx={{backgroundColor:"#F2BA49"}}>
          Ask for a Slot
          <SendIcon style={{marginLeft:"12px"}}/>
        </Fab>
      </div>
    </div>
  );
}

export default Schedule;