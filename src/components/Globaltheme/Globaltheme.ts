import {createTheme } from '@mui/material/styles';

// Exporting Global MUI Theme which can be overwritten here
export const theme = createTheme({
   palette: {
     primary: {
       main:"#f5a623",
       contrastText: '#fff',
     },
   },
 });