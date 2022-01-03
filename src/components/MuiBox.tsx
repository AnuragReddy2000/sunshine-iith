import * as React from 'react';
import Box, { BoxProps } from '@mui/material/Box';
import '../components/css/teams1.css';
import { flexbox } from '@mui/system';
import Typography from "@mui/material/Typography";

function MuiBox(props: BoxProps) {
    const { sx, ...other } = props;
    return (
      <Box
        sx={{
          display: 'flex',
          flexWrap: 'wrap',
          textAlign: 'center',
          justifyContent: 'space-evenly',
          alignItems: 'stretch',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          ...sx,
        }}
        {...other}
      />
    );
}

export default MuiBox;

