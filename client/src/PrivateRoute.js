import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuth } from "./context/auth";

function PrivateRoute({ component: Component, user: user, ...rest }) {
  const { authTokens } = useAuth();

  return (
    <Route
      {...rest}
      render={(props) =>
        authTokens ? <Component {...props} user={user} /> : <Redirect to="/" />
      }
    />
  );
}

export default PrivateRoute;
