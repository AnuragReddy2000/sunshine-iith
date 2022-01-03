import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import '../components/css/teams1.css';
import { flexbox } from '@mui/system';
import Typography from "@mui/material/Typography";
import PersonComponent from '../components/PersonComponent';
import MuiBox from '../components/MuiBox';
//images
import ficsukumar from '../images/teamImages/ficsukumar.jpg';
import cnsmaria from '../images/teamImages/cnsmaria.jpg';
import cnsyukti from '../images/teamImages/cnsyukti.jpg';
import cnsphani from '../images/teamImages/cnsphani.jpeg';
import logo128 from '../images/icon_x128.png';
import pmpavan from "../images/teamImages/pmpavan.jpg";
import mhshreya from "../images/teamImages/mhshreya.jpg";
// import mhprakhar from "../images/teamImages/mhprakhar.jpeg";
import mhvaidesh from "../images/teamImages/mhvaidesh.jpg";
import mshnaru from "../images/teamImages/mshnaru.jpeg";
import mshanurag from "../images/teamImages/mshanurag2.jpg";
import bhnethra from "../images/teamImages/bhnethra.jpg";
import bhsidhant from "../images/teamImages/bhsidhant.jpg";
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
import pmhabhishek from "../images/teamImages/pmhabhishek.jpg";
import pmajith from "../images/teamImages/pmajith2.jpg";
// import pbhajith from "../images/teamImages/pbhajith.jpg";
import pphtdhaval from "../images/teamImages/pphtdhaval2.jpg";
import welfare from "../images/teamImages/welfare.jpg";
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




export default function Display() {
  return (
    <div  style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
    <div style = {{width: "80%", marginLeft: '10%', marginRight: '10%'}}>
      {/* <img src = {logo128} alt = 'logo' className='logo'/> */}
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-evenly',
          textAlign: 'center',
          alignItems: 'center',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
        }}
      >
        <Item className = 'content1'>
          <Typography variant = 'h2' sx = {{fontWeight: 'bold'}}>Meet The Team</Typography>
          <div className='line'/> 
        </Item>
        <Item className = 'content2'>
            <Typography variant = 'h6' sx = {{fontWeight: 'subtitle1', color: '#808080', lineHeight: 1.5}}>
            Lorem ipsum dolor sit amet <br/>
            consectetur adipisicing elit. Distinctio<br/>
            corporis delectus dolorem possimus,
            dolor rerum
            </Typography>
        </Item>
      </Box>

      {/* <Typography variant = 'h5' className = 'heading'>Faculty In-charge</Typography> */}
      <MuiBox>
        <PersonComponent
            src = {ficsukumar}
            name = "Dr. D. SUKUMAR"
            desgn = "Faculty In-Charge"
            email = "suku@math.iith.ac.in"
            number = "+91-8331036053"
        />
      </MuiBox>
      <Typography variant = 'h4' className = 'heading'>Counsellors</Typography>
      <div className='line1'/> 
      <MuiBox>
        <PersonComponent
            src = {cnsmaria}
            name = "MARIA MORRIS"
            desgn = "Sr. Psychological Counsellor"
            email = "maria.morris@admin.iith.ac.in"
            number = "+91-8331036081"
        />
        <PersonComponent
            src = {cnsyukti}
            name = "YUKTI RASTOGI"
            desgn = "Psychological Counsellor"
            email = "yukti.rastogi@admin.iith.ac.in"
            number = "+91-8331036080"
        />
        <PersonComponent
            src = {cnsphani}
            name = "D. PHANI BHUSHAN"
            desgn = "Psychological Counsellor"
            email = "phani.bhushan@admin.iith.ac.in"
            number = "+91-8331036082"
        />
      </MuiBox>

      <Typography variant = 'h4' className = 'heading'>Student Heads</Typography>
      <div className='line1'/> 
      <MuiBox>
        <PersonComponent
            src = {pmpavan}
            name = "G. PAVAN KUMAR"
            desgn = "PG Management Head"
            email = "bm20mtech11001@iith.ac.in"
            number = "+91-8019840198"
        />
        <PersonComponent
            src = {pmhabhishek}
            name = "ABHISHEK DASH"
            desgn = "PG Mentorship Head"
            email = "bm20mtech11002@iith.ac.in"
            number = "+91-9439339993"
        />
        <PersonComponent
            src = {pmajith}
            name = "AJITH RAMAKRISHNAN"
            desgn = "PG Mentorship Head"
            email = "me20mtech14008@iith.ac.in"
            number = "+91-9768120579"
        />
        
        <PersonComponent
            src = {mhshreya}
            name = "SHREYA KHADKEKAR"
            desgn = "UG Management Head"
            email = "ms19btech11017@iith.ac.in"
            number = "+91-9403521845"
        />
        <PersonComponent
            src = {mshanurag}
            name = "ANURAG REDDY KARRI"
            desgn = "UG Mentorship Head"
            email = "ma18btech11001@iith.ac.in"
            number = "+91-9449830656"
        />
        <PersonComponent
            src = {welfare}
            name = "ANUSHKA KHARE"
            desgn = "UG Mentorship Head"
            email = "welfare.secy@gymkhana.iith.ac.in"
            number = "+91-9617915183"
        />
        <PersonComponent
            src = {mshnaru}
            name = "NARUMUGAI DURAI"
            desgn = "UG Mentorship Head"
            email = "bd19bdes11004@iith.ac.in"
            number = "+91-9840150631"
        />
        {/* <PersonComponent
            src = {bhnethra}
            name = "NETHRA MANDA"
            desgn = "UG Buddy Head"
            email = "ms20btech11012@iith.ac.in"
            number = "+91-7995813273"
        /> */}
        <PersonComponent
            src = {bhsidhant}
            name = "SIDHANT RANKA"
            desgn = "UG Buddy Head"
            email = "ce20btech11038@iith.ac.in"
            number = "+91-9586406788"
        />
      </MuiBox>

    </div>
    </div>
  );
}
