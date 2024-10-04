import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@/components/Container";
import Topbar from "./components/Topbar";
import Sidebar from "./components/Sidebar";
import { useRouter } from "next/router";
import Footer from "./components/Footer";

const Main = ({
  children,
  colorInvert = false,
  bgcolor = "transparent",
}: any) => {
  const theme = useTheme();
  const router = useRouter();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const open = isMd ? false : openSidebar;

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 38,
  });

  useEffect(() => {
    const handleRouterChange = (url) => {
      console.log(url);
    };

    router.events.on("routeChangeStart", handleRouterChange);

    return () => {
      router.events.off("routeChangeStart", handleRouterChange);
    };
  }, []);

  return (
    <Box style={{ paddingTop: 5 }}>
      <AppBar
        position={"sticky"}
        sx={{
          top: 0,
          backgroundColor: trigger ? theme.palette.background.paper : bgcolor,
        }}
        elevation={trigger ? 1 : 0}
      >
        <Container>
          <Topbar onSidebarOpen={handleSidebarOpen} />
        </Container>
      </AppBar>
      <Sidebar onClose={handleSidebarClose} open={open} variant="temporary" />
      <main>{children}</main>
      <Footer />
    </Box>
  );
};

Main.propTypes = {
  children: PropTypes.node,
  colorInvert: PropTypes.bool,
  bgcolor: PropTypes.string,
};

export default Main;
