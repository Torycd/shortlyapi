import { useEffect } from "react";
import useHttps from "./Use-https";

const ViewComponent = ({ requestData, handleResponse }) => {
  const { data, error } = useHttps(requestData);

  useEffect(() => {
    if (data) {
      handleResponse(data);
    }
  }, [data, handleResponse]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return <div>{data ? data : "Loading..."}</div>;
};

export default ViewComponent;
