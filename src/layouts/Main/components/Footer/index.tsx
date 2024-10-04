import React from "react";
import { Typography, Stack, Link, Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "dark.dark",
        py: { xs: 3, sm: 1.5 },
        position: "fixed",
        bottom: 0,
        width: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Stack direction={"row"} spacing={1}>
        <Typography variant="body1">Powered by</Typography>
        <Link
          underline="hover"
          variant="body1"
          target="_blank"
          rel="noreferrer"
          href="https://www.weatherapi.com/"
        >
          WeartherAPI.com
        </Link>
      </Stack>
    </Box>
  );
};

export default Footer;
