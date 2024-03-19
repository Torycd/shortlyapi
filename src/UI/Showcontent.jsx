import { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Showcontent = ({ response, isLoading, loading }) => {
  const [copied, setCopied] = useState(false);
  const [displayedItems, setDisplayedItems] = useState(
    Object.keys(localStorage)
  );

  const handleDelete = (key) => {
    localStorage.removeItem(key);
    setDisplayedItems((prevItems) => prevItems.filter((item) => item !== key));
  };

  const handleCopyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000); // Reset back to "Copy" after 2 seconds
  };

  useEffect(() => {
    setDisplayedItems(Object.keys(localStorage));
  }, [response]);

  return (
    <div className="w-dvh  mx-16 md:mx-32 z-20">
      <div className="w-full flex flex-col gap-2">
      {isLoading && <p className="text-black bg-white rounded-lg px-6 py-8">{loading}</p>}
        {displayedItems.map((key) => (
          <div
            key={key}
            className="text-black bg-white rounded-lg px-6 py-8 flex flex-col md:justify-between md:flex-row gap-3 md:gap-5"
          >
            <p>{localStorage.getItem(key)}</p>
            <div className="flex justify-between gap-3">
              <button onClick={() => handleDelete(key)}>Delete</button>
              <span
                className="bg-[#00FFFF] px-4 py-2 text-white font-bold w-auto rounded-lg hover:opacity-30"
                onClick={() => handleCopyToClipboard(localStorage.getItem(key))}
              >
                {copied ? "Copied" : "Copy"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Showcontent;

Showcontent.propTypes = {
  response: PropTypes.string,
  isLoading: PropTypes.bool,
  loading: PropTypes.string
};
