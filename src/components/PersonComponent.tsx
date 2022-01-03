import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import '../components/css/teams1.css';
import { flexbox } from '@mui/system';
import Typography from "@mui/material/Typography";
import {Email, Call, WhatsApp} from '@mui/icons-material';
import { IconButton } from "@mui/material";

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
  

  function PersonComponent ({src, name, desgn, email, number}) {
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
          <IconButton href={"tel:"+number}>
            <Call className = 'icons'/>
          </IconButton>
          <IconButton href={"https://api.whatsapp.com/send?phone="+number}>
            <WhatsApp className = 'icons'/>
          </IconButton>
        </div>
      </Item>
      )
  }

  export default PersonComponent;