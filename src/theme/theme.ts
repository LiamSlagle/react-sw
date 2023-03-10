import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#ffe81f',
      light: '#ffe81f',
      dark: '#ffe81f',
    },
    text: {
      primary: '#ffe81f',
      secondary: '#ffe81f',
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
