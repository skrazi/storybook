import { Button, Card, CardActions, CardContent, CardMedia,  Typography } from "@mui/material";
import CoverPhoto from "./2.svg";
import { CardStat } from "../CardStat";
// import theme from '../../../utils/theme';
// import { ThemeProvider } from '@mui/material/styles';



export const BookCard = () => {
  return (
      <Card sx={{ maxWidth: 284 }}>
      <CardMedia
        component="img"
        height="285"
        image={CoverPhoto}
        alt="Cover Image"
      />
      <CardContent>
        <Typography variant="subtitle1" component="div">Beyond Entreprenuership 2.0</Typography>
        <Typography variant="body1" color="primary.main">
          Jim Collins &amp; Bill Lazier
        </Typography>
        <CardStat />
      </CardContent>
      <CardActions>
        <Button size="large" variant="outlined" fullWidth>+ Add to Library</Button>
      </CardActions>
    </Card>   
  );
};
