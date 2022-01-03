import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import '../components/css/teams1.css';
import { flexbox } from '@mui/system';
import Typography from "@mui/material/Typography";
import PersonComponent from '../components/PersonComponent';
import MuiBox from '../components/MuiBox';
//images
import mhvaidesh from "../images/teamImages/mhvaidesh.jpg";
import cteshwari from "../images/teamImages/cteshwari.jpg";
import ctpradnya from "../images/teamImages/ctpradnya.jpg";
import ctrahul from "../images/teamImages/ctrahul.jpg";
import ctadithya from "../images/teamImages/ctadithya.jpg";
import dtmandira from "../images/teamImages/dtmandira.jpg";
import dtarun from "../images/teamImages/dtarun.jpg";
import ftsabbar from "../images/teamImages/ftsabbar.jpeg";
import phtritik from "../images/teamImages/phtritik.jpg";
import ptpavani from "../images/teamImages/ptpavani.jpg";
import ptrishi from "../images/teamImages/ptrishi.jpg";
import wtanand from "../images/teamImages/wtanand.jpeg";
import wtvarun from "../images/teamImages/wtvarun.jpg";
import wtharshitha from "../images/teamImages/wtharshitha.jpg";
import wtaayush from "../images/teamImages/wtaayush.jpeg";
import wtprachodhan from "../images/teamImages/wtprachodhan.jpg";
import pphtdhaval from "../images/teamImages/pphtdhaval2.jpg";
import ftprakhar from "../images/teamImages/ftprakhar2.jpeg";



function Item(props: BoxProps) {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        fontSize: '1rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}




export default function StudentTeam() {
  return (
    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
    <div style = {{width: "80%", marginLeft: '10%', marginRight: '10%'}}>
      {/* <img src = {logo128} alt = 'logo' className='logo'/> */}
        
      <Typography variant = 'h4' className = 'heading' sx = {{marginTop: '50px'}}>Student Team</Typography>
      <div className='line1'/> 
      <MuiBox>
        <PersonComponent
            src = {ctadithya}
            name = "ADITHYA RAM MALOTHU"
            desgn = "Content team"
            email = "bm20btech11009@iith.ac.in"
            number = "+91-7670934896"
        />
        <PersonComponent
            src = {cteshwari}
            name = "JALADURGAM ESHWARI"
            desgn = "Content team"
            email = "ee19btech11042@iith.ac.in"
            number = "+91-9121613437"
        />
        <PersonComponent
            src = {ctpradnya}
            name = "PRADNYA CHAVAN"
            desgn = "Content team"
            email = "ch19btech11020@iith.ac.in"
            number = "+91-7387102799"
        />
        <PersonComponent
            src = {ctrahul}
            name = "V. RAHUL"
            desgn = "Content team"
            email = "ai20btech11030@iith.ac.in"
            number = "+91-8667406096"
        />
        <PersonComponent
            src = {dtarun}
            name = "ARUNDHATHY B."
            desgn = "Design Team"
            email = "bd20bdes11006@iith.ac.in"
            number = "+91-9747838897"
        />
        <PersonComponent
            src = {dtmandira}
            name = "MANDIRA V. R"
            desgn = "Design Team"
            email = "bd19bdes11006@iith.ac.in"
            number = "+91-9869203384"
        />
        <PersonComponent
            src = {ftprakhar}
            name = "PRAKHAR PRAGYA"
            desgn = "Finance Team"
            email = "ch19btech11036@iith.ac.in"
            number = "+91-9967535728"
        />
        <PersonComponent
            src = {ftsabbar}
            name = "SABBAR DABEER"
            desgn = "Finance Team"
            email = "ME19BTECH11048@iith.ac.in"
            number = "+91-7620428035"
        />
        <PersonComponent
            src = {pphtdhaval}
            name = "DHAVAL J. AJANA"
            desgn = "Photography Team"
            email = "ph20mscst11023@iith.ac.in"
            number = "+91-9737892787"
        />
        <PersonComponent
            src = {phtritik}
            name = "RITIK"
            desgn = "Photography Team"
            email = "bd19bdes11007@iith.ac.in"
            number = "+91-8858882038"
        />
        <PersonComponent
            src = {ptpavani}
            name = "PAVANI AISHWARYA"
            desgn = "Publicity Team"
            email = "ch20btech11026@iith.ac.in"
            number = "+91-8919884254"
        />
        <PersonComponent
            src = {ptrishi}
            name = "RISHIKESH KATKE"
            desgn = "Publicity Team"
            email = "ce20btech11047@iith.ac.in"
            number = "+91-9021272821"
        />
        <PersonComponent
            src = {mhvaidesh}
            name = "VAIDESH KODI"
            desgn = "Publicity Team"
            email = "ce20btech11018@iith.ac.in"
            number = "+91-9014646674"
        />
        <PersonComponent
            src = {wtaayush}
            name = "AAYUSH PATEL"
            desgn = "UG App & Web Dev Team"
            email = "cs20btech11001@iith.ac.in"
            number = "+91-9987210636"
        /> 
        <PersonComponent
            src = {wtanand}
            name = "DONTU ANAND SAI"
            desgn = "UG App & Web Dev Team"
            email = "ee19btech11007@iith.ac.in"
            number = "+91-9515481817"
        />
        <PersonComponent
            src = {wtharshitha}
            name = "S. HARSHITHA REDDY"
            desgn = "UG App & Web Dev Team"
            email = "me19btech11043@iith.ac.in"
            number = "+91-9390222810"
        />
        <PersonComponent
            src = {wtprachodhan}
            name = "SAI PRACHODHAN D."
            desgn = "UG App & Web Dev Team"
            email = "ee20btech11013@iith.ac.in"
            number = "+91-9160571016"
        />
        <PersonComponent
            src = {wtvarun}
            name = "VARUN RAO CHINTU"
            desgn = "UG App & Web Dev Team"
            email = "ma19btech11009@iith.ac.in"
            number = "+91-9866897712"
        />
      </MuiBox>

    </div>
    </div>
  );
}
