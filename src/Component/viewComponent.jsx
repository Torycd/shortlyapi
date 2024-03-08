import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ViewComponent = ({ response, error }) => {
  const [displayedItems, setDisplayedItems] = useState(Object.keys(localStorage));

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setDisplayedItems((prevItems) => prevItems.filter((item) => item !== key));
  };

  useEffect(() => {
    setDisplayedItems(Object.keys(localStorage)); // Update displayed items when component mounts or when new data is added
  }, [response]);

  return (
    <>
      <div>
        {displayedItems.map((key) => (
          <div
            key={key}
            className="text-black bg-white w-dvh px-6 py-8 rounded-lg mx-16 md:mx-32 z-20"
          >
            <p>{localStorage.getItem(key)}</p>
            <button onClick={() => handleDelete(key)}>Delete Data</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ViewComponent;

ViewComponent.propTypes = {
  response: PropTypes.string,
  error: PropTypes.string,
};
