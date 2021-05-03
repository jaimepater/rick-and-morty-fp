import { createMuiTheme } from '@material-ui/core';
import { Colors } from './theme';

const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      main: Colors.Primary,
    },
  },
  typography: {
    htmlFontSize: 10,
    body1: {
      fontSize: '1.8rem',
      lineHeight: '3.0rem',
    },
    body2: {
      fontSize: '1.6rem',
      lineHeight: '2.6rem',
    },
    h1: {
      fontSize: '4.8rem',
      fontWeight: 800,
      lineHeight: '5.6rem',
    },
    h2: {
      fontSize: '3.2rem',
      fontWeight: 800,
      lineHeight: '4.0rem',
    },
    h3: {
      fontSize: '2.4rem',
      fontWeight: 400,
      lineHeight: '3.2rem',
    },
    h4: {
      fontSize: '2.0rem',
      fontWeight: 800,
      lineHeight: '3.2rem',
    },
    h5: {
      fontSize: '1.8rem',
      fontWeight: 800,
      lineHeight: '2.4rem',
    },
    h6: {
      fontSize: '1.8rem',
      fontWeight: 400,
      lineHeight: '2.4rem',
    },
  },
});

export default MuiTheme;
