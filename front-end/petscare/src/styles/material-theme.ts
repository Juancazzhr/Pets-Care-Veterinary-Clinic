import {createTheme} from "@mui/material";
import { red } from '@mui/material/colors';

export const theme = createTheme({
    typography: {
        fontFamily: 'Roboto, sans-serif'
    },
 palette: {
        primary: {
          main: '#573469',
        },
        secondary: {
          main: '#64C9A7',
        },
        info: {
          main: '#EAEBED',
        },
        error: {
          main: red.A400,
        },
      }
});