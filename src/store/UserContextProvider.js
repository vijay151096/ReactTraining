import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider(props) {
  const user = localStorage.getItem("username");
  const isLoggedIn = user === null ? false : true;
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const login = async (username, password) => {
    const response = await fetch("http://localhost:8080/users");
    const data = await response.json();
    const userDetails = await data.filter(
      (user) => user.username === username
    )[0];
    if (userDetails.username && userDetails.password === password) {
      setIsAuthenticated(true);
      localStorage.setItem("username", userDetails.username);
    }
  };
  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("username");
  };

  return (
    <UserContext.Provider
      value={{ isAuthenticated, login: login, logout: logout }}
    >
      {" "}
      {props.children}{" "}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
