import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { createContainer } from "unstated-next";

const useAuth = (initialState = { loading: true }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    login();
  }, []);

  const login = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState({ id: 123, username: "TrueXPixels" });
    }, 2500);
  };

  const logout = () => {
    setState({});
  };

  const ProtectedRoute = (props) => {
    if (state.id) return <Route {...props} />;
    else return <>Sorry, this is a protected route.</>;
  };

  return { state, login, logout, ProtectedRoute };
};

export const Auth = createContainer(useAuth);
