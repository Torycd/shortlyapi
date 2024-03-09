import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

const ViewComponent = ({ response }) => {
  const [displayedItems, setDisplayedItems] = useState(
    Object.keys(localStorage)
  );

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setDisplayedItems((prevItems) => prevItems.filter((item) => item !== key));
  };
  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
  };

  useEffect(() => {
    setDisplayedItems(Object.keys(localStorage));
  }, [response]);

  return (
    <div className="w-dvh   mx-16 md:mx-32 z-20">
      <div className="w-full flex flex-col gap-2">
        {displayedItems.map((key) => (
          <div
            key={key}
            className="text-black bg-white rounded-lg px-6 py-8 flex flex-col md:justify-between md:flex-row gap-3 md:gap-5"
          >
            <p>{localStorage.getItem(key)}</p>
            <div className="flex justify-between gap-3">
              <button onClick={() => handleDelete(key)}>Delete</button>
              <span>
                <FontAwesomeIcon icon={faClipboard} className="bg-white" onClick={() => handleCopyToClipboard(localStorage.getItem(key))}/>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ViewComponent;

ViewComponent.propTypes = {
  response: PropTypes.string,
  error: PropTypes.string,
};
