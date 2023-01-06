import { useState } from "react";

const useFetch = () => {
  const [state, setState] = useState("loading");
  const [data, setData] = useState<any>(null);

  type MethodType = "GET"|"POST"|"DELETE"

  const fetchData = async (uri:string, method:MethodType, body?:any) => {
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
    return { data: data }
  };

  return { data: data, state: state, fetchRequest: fetchData };
};

export default useFetch;
