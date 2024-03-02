import { useState, useEffect } from "react";

const PROXY_URL = "http://localhost:3001/proxy"; // Update with your proxy server URL

const useHttps = (url, requestData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(PROXY_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ url, requestData }),
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url, requestData]);

  return { data, error };
};

export default useHttps;
