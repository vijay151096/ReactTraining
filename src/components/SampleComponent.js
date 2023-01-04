import React from "react";
import useFetch from "../hooks/useFetch";
import { useEffect } from "react";

function SampleComponent() {
  const newUser = {
    id: 20,
    username: "user20",
    password: "password",
  };
  /*const getRequestResult = useFetch("users", "GET");
  const postRequestResult = useFetch("users", "POST", newUser);*/

  const sendRequestObject = useFetch();

  const handleClick = (e) => {
    sendRequestObject.fetchRequest("users", "POST", newUser);
  };

  useEffect(() => {
    sendRequestObject.fetchRequest("users", "GET");
  }, []);

  return (
    <div>
      <h1>{sendRequestObject.state}</h1>
      {false && (
        <h1>
          {sendRequestObject.data[0] && sendRequestObject.data[0].username}
        </h1>
      )}
      <button onClick={handleClick}>Click to send post request</button>
    </div>
  );
}

export default SampleComponent;
