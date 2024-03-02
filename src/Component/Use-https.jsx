import { useState, useEffect } from "react";

const useHttps = (url, requestData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "POST",
          body: new URLSearchParams(requestData),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          mode: "no-cors", // Add this line to handle CORS
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        // If using 'no-cors', you won't be able to access response body
        setData(
          "Request successful, but response body not accessible due to CORS"
        );
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url, requestData]);

  return { data, error };
};

export default useHttps;
