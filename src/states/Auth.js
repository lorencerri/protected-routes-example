import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";
import { createContainer } from "unstated-next";
import { randomUser } from "../misc/randomUser";

const useAuth = (initialState = { loading: true }) => {
  const [state, setState] = useState(initialState);

  useEffect(() => {
    login();
  }, []);

  const login = () => {
    setState({ loading: true });
    setTimeout(() => {
      setState(randomUser);
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
