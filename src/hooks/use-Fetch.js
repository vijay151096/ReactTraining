import { useState } from "react";

const useFetch = () => {
  const [state, setState] = useState("loading");
  const [data, setData] = useState();

  const fetchData = async (uri, method, body) => {
    try {
      const response = await fetch(`http://localhost:8080/${uri}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body && JSON.stringify(body),
      });

      if (response.ok) {
        const dataToAdd = await response.json();
        setData(dataToAdd);
        setState("done");
      }
      if (!response.ok) {
        setState("error");
      }
    } catch {
      setState("error");
    }
  };

  return { data: data, state: state, fetchRequest: fetchData };
};

export default useFetch;
