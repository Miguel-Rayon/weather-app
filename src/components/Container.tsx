import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";

const Container = ({ children, ...rest }: any) => (
  <Box
    maxWidth={{ sm: 720, md: 1400 }}
    width={1}
    margin={"0 auto"}
    paddingX={2}
    paddingY={{ xs: 4 }}
    {...rest}
  >
    {children}
  </Box>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Container;
