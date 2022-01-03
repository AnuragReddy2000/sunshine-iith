import * as React from 'react';
import '../components/css/teams1.css';
import { flexbox } from '@mui/system';
import Typography from "@mui/material/Typography";
// import PersonComponent from '../components/PersonComponent';
import {Email} from '@mui/icons-material';
import { IconButton } from "@mui/material";
import Box, { BoxProps } from '@mui/material/Box';
import MuiBox from '../components/MuiBox';
//images
import aishantanu from '../images/teamImages/aishantanu.jpeg';
import biotechashish from '../images/teamImages/biotechashish.jpg';
import bmekousik from '../images/teamImages/bmekousik.jpg';
import cedigvijay from '../images/teamImages/cedigvijay.jpg';
import chsatya from '../images/teamImages/chsatya.jpg';
import climatesatish from '../images/teamImages/climatesatish.jpg';
import csrogers from '../images/teamImages/csrogers.jpg';
import cysomnath from '../images/teamImages/cysomnath.png';
import desneel from '../images/teamImages/desneel.jpg';
import eekoushik from '../images/teamImages/eekoushik.jpg';
import entreganesh from '../images/teamImages/entreganesh.jpg';
import lamahati from '../images/teamImages/lamahati.jpg';
import lashuhita from '../images/teamImages/lashuhita.jpg';
import madipankar from '../images/teamImages/madipankar.jpg';
import maegangadharan from '../images/teamImages/maegangadharan.jpeg';
import msmesuresh from '../images/teamImages/msmesuresh.png';
import pharabinda from '../images/teamImages/pharabinda.jpg';
import logo128 from '../images/icon_x128.png';




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
  

  function PersonComponent ({src, name, desgn, email}) {
      return (
        <Item className='details'>
        <img className = 'image1' src = {src} alt = {name}/>
        <div className='details2'>
          <Typography variant = 'h6' sx = {{letterSpacing: 2, marginBottom: '10px', marginTop: '10px'}}>
            {name}
          </Typography>
            <div className = 'desgn'>
              <Typography variant = 'body1' sx = {{marginBottom: '10px'}}>
                {desgn}
              </Typography>
            </div>
          <IconButton href={"mailto:"+email}>
            <Email className = 'icons'/>
          </IconButton>
        </div>
      </Item>
      )
  }


export default function FacultyRepts() {
    return (
        <div  style={{display:"flex", flexDirection:"column", justifyContent:"center"}}> 
        <div style = {{width: "80%", marginLeft: '10%', marginRight: '10%'}}>
        {/* <img src = {logo128} alt = 'logo' className='logo'/> */}
            <Typography variant = 'h4' className = 'heading' sx = {{marginTop: '50px'}}>Faculty Representatives</Typography>
            <div className='line1'/>
            <MuiBox> 
                <PersonComponent
                    src = {aishantanu}
                    name = "Dr. SHANTANU DESAI"
                    desgn = "Artificial Intelligence"
                    email = "shantanud@phy.iith.ac.in"
                />
                <PersonComponent
                    src = {bmekousik}
                    name = "Dr. KOUSIK SARATHY"
                    desgn = "Biomedical Engineering"
                    email = "kousiksarathy@bme.iith.ac.in"
                />
                <PersonComponent
                    src = {biotechashish}
                    name = "Dr. ASHISH MISRA"
                    desgn = "Biotechnology"
                    email = "ashishmisra@bt.iith.ac.in"
                />
                <PersonComponent
                    src = {chsatya}
                    name = "Dr. SATYAVRATA SAMAVEDI"
                    desgn = "Chemical Engineering"
                    email = "samavedi@che.iith.ac.in"
                />
                <PersonComponent
                    src = {climatesatish}
                    name = "Dr. SATISH REGONDA"
                    desgn = "Climate Change"
                    email = "satishr@ce.iith.ac.in"
                />
                <PersonComponent
                    src = {cysomnath}
                    name = "Dr. SOMNATH MAJI"
                    desgn = "Chemistry"
                    email = "smaji@chy.iith.ac.in"
                />
                <PersonComponent
                    src = {cedigvijay}
                    name = "Dr. DIGVIJAY PAWAR"
                    desgn = "Civil Engineering"
                    email = "dspawar@ce.iith.ac.in"
                />
                <PersonComponent
                    src = {csrogers}
                    name = "Dr. ROGERS MATHEW"
                    desgn = "Computer Science and Engineering"
                    email = "rogers@cse.iith.ac.in"
                />
                <PersonComponent
                    src = {desneel}
                    name = "Dr. NEEL K."
                    desgn = "Design"
                    email = "neel@des.iith.ac.in"
                />
                <PersonComponent
                    src = {eekoushik}
                    name = "Dr. KAUSHIK NAYAK"
                    desgn = "Electrical Engineering"
                    email = "knayak@iith.ac.in"
                />
                <PersonComponent
                    src = {cedigvijay}
                    name = "Dr. DIGVIJAY PAWAR"
                    desgn = "Engineering Science"
                    email = "dspawar@ce.iith.ac.in"
                />
                <PersonComponent
                    src = {entreganesh}
                    name = "Dr. M P GANESH"
                    desgn = "Entrepreneurship and Management"
                    email = "mpganesh@la.iith.ac.in"
                />
                <PersonComponent
                    src = {lashuhita}
                    name = "Dr. SHUHITA BHATTACHARJEE"
                    desgn = "Liberal Arts"
                    email = "shuhita@la.iith.ac.in"
                />
                <PersonComponent
                    src = {lamahati}
                    name = "Dr. MAHATI CHITTEM"
                    desgn = "Liberal Arts"
                    email = "mahati@la.iith.ac.in"
                />
                <PersonComponent
                    src = {maegangadharan}
                    name = "Dr. GANGADHARAN"
                    desgn = "Mechanical and Aerospace Engineering"
                    email = "gangadharanr@mae.iith.ac.in"
                />
                <PersonComponent
                    src = {msmesuresh}
                    name = "Dr. SURESH KUMAR"
                    desgn = "Materials Science and Metallurgical Engineering"
                    email = "gsuresh@msme.iith.ac.in"
                />
                <PersonComponent
                    src = {madipankar}
                    name = "Dr. DIPANKAR GHOSH"
                    desgn = "Mathematics"
                    email = "dghosh@math.iith.ac.in"
                />
                <PersonComponent
                    src = {pharabinda}
                    name = "Dr. ARABINDA HALDAR"
                    desgn = "Physics"
                    email = "arabinda@phy.iith.ac.in"
                />
            </MuiBox>
        </div>
        </div>
    );
}
