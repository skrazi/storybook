
// import theme from './utils/theme';

import { BookCard } from './components/molecules/BookCard';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Typography } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080",
    },
  },
});

function App() {
  return (
   <ThemeProvider theme={theme}>
     <BookCard />
     <Typography variant='body1' color="primary.main">body1</Typography>
     <Typography variant='body2'>body2</Typography>
     <Typography variant='subtitle1'>subtitle1</Typography>
     <Typography variant='subtitle2'>subtitle2</Typography>

   </ThemeProvider>
  );
}

export default App;
