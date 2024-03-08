// import { useEffect } from "react";
import PropTypes from "prop-types";

const ViewComponent = ({ response, error }) => {
  let content;

  if (response) {
    content = response;
  }
  if (error) {
    content = error;
  }

  return <div className="text-black">{content}</div>;
};

export default ViewComponent;

ViewComponent.propTypes = {
  response: PropTypes.string,
  error: PropTypes.string,
};
