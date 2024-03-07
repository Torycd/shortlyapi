import PropTypes from "prop-types";
import { useState } from "react";

import ViewComponent from './ViewComponent'
import Button from "../UI/Button";

const Shortly = ({ className }) => {
  const [urlInput, setUrlInput] = useState(""); // State to store the user-entered URL
  const [response, setResponse] = useState(null);
  const [requestData, setRequestData] = useState(null); // State to store the request data

  const handleFormSubmit = () => {
    const fetchUrl = `https://cleanuri.com/api/v1?url=${urlInput}`;
    setResponse(null); // Clear previous response
    setRequestData({ url: fetchUrl }); // Update request data
  };

  return (
    <div className="-translate-y-1/2 bg-[#421E47] w-dvh px-6 py-8 rounded-lg mx-16 md:mx-32 z-20">
      <div className="w-full">
        <form className="flex flex-col md:flex-row gap-3 md:gap-5" onSubmit={handleFormSubmit}>
          <input
            type="text"
            className="w-full px-9 py-4 md:h-auto rounded-lg  text-xl bg-white"
            required
            placeholder="Shorten a link here..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <button className="bg-[#00FFFF] w-auto text-white text-xl font-bold px-9 py-4 rounded-lg" type="submit">
            Shorten It!
          </button>
          <ViewComponent requestData={requestData} setResponse={setResponse} fetchUrl={true} />
        </form>
      </div>
    </div>
  );
};

Shortly.propTypes = {
  className: PropTypes.string,
};

export default Shortly;
