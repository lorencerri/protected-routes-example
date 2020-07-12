import React from "react";

import { Auth } from "../states/Auth";

export const Protected = () => {
  const auth = Auth.useContainer();

  return <>Viewing a protected route as {auth.state.username}</>;
};
