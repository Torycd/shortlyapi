import { useState, useEffect } from "react";

const useHttps = (url) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
        });

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.text();
        setData(result);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [url]);
  console.log(data)

  return { data, error };
};

export default useHttps;
