import React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import {
  Typography,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import Logout from "@mui/icons-material/Logout";
import ThemeModeToggler from "@/components/ThemModeToggler";
import { Navigation } from "@/layouts/navigation";
import Grid from "@mui/material/Grid2";

const SidebarNav = () => {
  return (
    <Box>
      <Box
        width={1}
        paddingX={2}
        paddingY={1}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          display={"flex"}
          component="a"
          href={`/`}
          title="Weather app"
          width={{ xs: 140, md: 160 }}
          style={{ textDecoration: "none" }}
        >
          <Typography
            variant="h6"
            color="text.primary"
            style={{ fontWeight: 400, fontSize: 16 }}
          >
            Weather app
          </Typography>
        </Box>
        <ThemeModeToggler />
      </Box>
      <Box paddingX={2} paddingY={2}>
        <Grid container spacing={2}>
          <Grid size={12}>
            <Divider />
          </Grid>
          <Grid
            size={12}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            {Navigation.topbar &&
              Navigation.topbar.map((item, index) => (
                <List key={index} style={{ marginBottom: 2 }}>
                  <ListItem disablePadding>
                    <ListItemButton component="a" href={item.href}>
                      <ListItemIcon>
                        <DashboardIcon />
                      </ListItemIcon>
                      <ListItemText primary={item.title} />
                    </ListItemButton>
                  </ListItem>
                </List>
              ))}
          </Grid>
          <Grid size={12}>
            <Button
              fullWidth
              color="primary"
              variant="contained"
              disableElevation
              startIcon={<Logout />}
            >
              Contact
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default SidebarNav;
