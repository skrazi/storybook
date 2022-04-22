// import { Icon } from "@mui/material";
import Clock from "@mui/icons-material/AccessTimeOutlined";
import { Stack, Typography } from "@mui/material";

export const CardStat = () => {
  return (
    <Stack
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      spacing={1}
    >
      <Clock />
      <Typography variant="body2" color="text.secondary">
        15-minute read
      </Typography>
    </Stack>
  );
};
