import React from "react";
import useFetch from "../hooks/use-Fetch";
import { useEffect } from "react";

function SampleComponent() {
  const getRequestResult = useFetch("users", "GET");
  const newUser = {
    id: 8,
    username: "user8",
    password: "password",
  };
  const postRequestResult = useFetch("users", "POST", JSON.stringify(newUser));

  return (
    <div>
      <h1>{getRequestResult.state}</h1>
      <h1>{getRequestResult.data[0] && getRequestResult.data[0].username}</h1>
    </div>
  );
}

export default SampleComponent;
