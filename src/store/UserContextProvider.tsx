import React, { useState } from "react";
import UserContext from "./UserContext";
import useFetch from "../hooks/useFetch";
import UserType from "../components/model/UserType";

const UserContextProvider: React.FC<{ children: React.ReactNode }> = (
  props
) => {
  const user = localStorage.getItem("username");
  const isLoggedIn = user === null ? false : true;
  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);
  const { data, fetchRequest } = useFetch();

  const login = async (username: string, password: string) => {
    await fetchRequest("users", "GET");
    const userDetails =
      (await data) &&
      data.filter((user: UserType) => user.username === username)[0];
    if (
      userDetails &&
      userDetails.username &&
      userDetails.password === password
    ) {
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
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContextProvider;
