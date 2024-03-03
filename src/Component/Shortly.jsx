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
        <form className="flex flex-col md:flex-row gap-3 md:gap-5">
          <input
            type="text"
            className="w-full px-9 py-4 md:h-auto rounded-lg  text-xl bg-white"
            required
            placeholder="Shorten a link here..."
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
          />
          <Button className={className} type="button" onClick={handleFormSubmit}>
            Shorten It!
          </Button>
          <ViewComponent requestData={requestData} setResponse={setResponse} fetchUrl={fetchUrl} />
        </form>
      </div>
    </div>
  );
};

Shortly.propTypes = {
  className: PropTypes.string,
};

export default Shortly;
