import { useState } from "react";

const useHttp = () => {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async (url) => {
    try {
      console.log(url)
      const response = await fetch(url, {method: "POST"});
      const data = await response.text();
      setResponse(data);
    } catch (error) {
      setError(error.message);
    }
  };

  return { response, error, fetchData };
};

export default useHttp;
