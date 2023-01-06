import React from "react";

const UserContext = React.createContext({
  isAuthenticated: false,
  login: (username: string, password: string) => {},
  logout: () => {},
});

export default UserContext;
