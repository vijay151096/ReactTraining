import { useState, useEffect } from "react";

const useFetch = (uri, method, body) => {
  const [state, setState] = useState("loading");
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:8080/${uri}`, {
        method: method,
        headers: {
          "Content-Type": "application/json",
        },
        body: body && JSON.stringify(body),
      });
      const dataToAdd = await response.json();
      setState("done");
      setData(dataToAdd);
    };
    fetchData();
  }, []);

  return { data: data, state: state };
};

export default useFetch;
