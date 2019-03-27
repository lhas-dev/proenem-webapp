import { createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';

export default createMuiTheme({
    palette: {
      primary: { main: '#FFF' },
      secondary: { main: green.A700 },
    },
    typography: { useNextVariants: true },
  });