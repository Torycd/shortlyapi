import useHttps from "./Use-https";

const ViewComponent = ({ requestData, setResponse }) => {
  const { data, error } = useHttps(
    "https://cleanuri.com/api/v1/shorten",
    requestData
  );

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (data) {
    setResponse(data);
  }

  return <div>Loading...</div>;
};

export default ViewComponent;
