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

  return (
    <>
      {response ? (
        <div className="text-black bg-white w-dvh px-6 py-8 rounded-lg mx-16 md:mx-32 z-20">
          {content}
        </div>
      ) : (
        ""
      )}
    </>
  );
};

export default ViewComponent;

ViewComponent.propTypes = {
  response: PropTypes.string,
  error: PropTypes.string,
};
