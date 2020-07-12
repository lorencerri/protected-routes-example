import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import { Box, Grommet, Nav, Button, Sidebar } from "grommet";
import { theme } from "./misc/theme";

import { Protected } from "./routes/Protected";
import { Unprotected } from "./routes/Unprotected";

import { Auth } from "./states/Auth";

export const App = () => {
  const auth = Auth.useContainer();

  return (
    <Grommet theme={theme} full>
      <Box fill>
        <Box direction="row" flex overflow={{ horizontal: "hidden" }}>
          <Box
            width="small"
            background="light-2"
            elevation="small"
            align="center"
            justify="center"
          >
            <Nav gap="small">
              <Sidebar header={<>Hello, {auth.state.username || "Guest"}</>}>
                <Button hoverIndicator onClick={auth.login}>
                  Login
                </Button>
                <Button hoverIndicator onClick={auth.logout}>
                  Logout
                </Button>
                <hr />
                <Link to="/">
                  <Button hoverIndicator>Unprotected Route</Button>
                </Link>
                <Link to="/protected">
                  <Button hoverIndicator>Protected Route</Button>
                </Link>
              </Sidebar>
            </Nav>
          </Box>
          <Box flex align="center" justify="center">
            {auth.state.loading ? (
              "Loading..."
            ) : (
              <Switch>
                <Route exact path="/" component={Unprotected} />
                <auth.ProtectedRoute
                  exact
                  path="/protected"
                  component={Protected}
                />
              </Switch>
            )}
          </Box>
        </Box>
      </Box>
    </Grommet>
  );
};
