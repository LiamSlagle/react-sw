import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffe81f',
      light: '#ffe81f',
      dark: '#ffe81f',
    },
    secondary: {
      main: 'rgba(255, 255, 255, 0.23)',
    },
    text: {
      primary: '#ffe81f',
    },
  },
  components: {
    MuiInputBase: {
      defaultProps: {
        color: 'primary',
      },
    },
  },
});

export default theme;
