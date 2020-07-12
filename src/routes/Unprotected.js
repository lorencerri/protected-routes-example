import React from "react";

import { Auth } from "../states/Auth";

export const Unprotected = () => {
  const auth = Auth.useContainer();

  return <>Viewing an unprotected route as {auth.state.username || "Guest"}</>;
};
