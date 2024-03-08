import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const ViewComponent = ({ response }) => {
  const [displayedItems, setDisplayedItems] = useState(
    Object.keys(localStorage)
  );

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setDisplayedItems((prevItems) => prevItems.filter((item) => item !== key));
  };

  useEffect(() => {
    setDisplayedItems(Object.keys(localStorage)); // Update displayed items when component mounts or when new data is added
  }, [response]);

  return (
    <div className="w-dvh  rounded-lg mx-16 md:mx-32 z-20">
      <div className="w-full">
        {displayedItems.map((key) => (
          <div
            key={key}
            className="text-black bg-white px-6 py-8 flex flex-col md:flex-row gap-3 md:gap-5"
          >
            <p>{localStorage.getItem(key)}</p>
            <div className="flex justify-between">
              <button onClick={() => handleDelete(key)}>Delete Data</button>
              <div>copy</div>
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
