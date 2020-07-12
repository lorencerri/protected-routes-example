import React from "react";
import { Box, Grommet } from "grommet";

const theme = {
  global: {
    colors: {
      brand: "#8A9BA8",
    },
    font: {
      family: "Open Sans",
      size: "18px",
      height: "20px",
    },
  },
};

const AppBar = (props) => (
  <Box
    tag="header"
    direction="row"
    align="center"
    justify="between"
    background="brand"
    pad={{ left: "medium", right: "small", vertical: "small" }}
    elevation="medium"
    style={{ zIndex: "1" }}
    {...props}
  />
);

export const App = () => {
  return (
    <Grommet theme={theme} full>
      <Box fill>
        <AppBar>Hello Grommet!</AppBar>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box
            width="small"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            sidebar
          </Box>
          <Box flex align="center" justify="center">
            app body
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
