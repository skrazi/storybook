import { createTheme } from "@mui/material/styles";
import '../index.css';

const theme = createTheme({
  palette: {
    primary: {
      main: "#2CE080"
    }
  },
  typography: {
    fontFamily: "Cera Pro",
    h1: {
      fontSize: "36px",
      lineHeight: "45px",
      fontWeight: "bold"
    },
    subtitle1: {
      fontSize: "24px",
      lineHeight: "32px",
      fontWeight: "bold"
    },
    subtitle2: {
      fontFamily: "Cera Pro",
      fontSize: "18px",
      lineHeight: "21px",
      fontWeight: "bold"
    },
    body1: {
      fontFamily: "Cera Pro",
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold"
    },
    body2: {
      fontSize: "16px",
      lineHeight: "24px",
      fontWeight: "bold"
    },
    caption: {
      fontSize: "12px",
      lineHeight: "12px",
      fontWeight: "bold"
    }
  }
});

export default theme;