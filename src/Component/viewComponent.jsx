import useHttps from "./Use-https";

const ViewComponent = ({ requestData, setResponse, fetchUrl }) => {
  const { data, error } = useHttps(fetchUrl, requestData);

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    setResponse(data);
  }

  return <div>Loading...</div>;
};

export default ViewComponent;
