import { createTheme } from "@mui/material";
import "@fontsource/montserrat";

const theme = createTheme({
  palette: {
    primary: {
      light: '#333333',
      main: '#000',
      dark: '#000',
      contrastText: '#fff'
    },
    secondary: {
      light: '#ff3333',
      main: '#FF0000',
      dark: '#b20000',
      contrastText: '#fff'
    }
  },
  typography: {
    fontFamily: 'Montserrat',
  },
});

export default theme;