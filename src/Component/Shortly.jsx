import PropTypes from "prop-types";
import  { useState } from 'react';

import viewComponent from "./viewComponent";
import Button from "../UI/Button";

const Shortly = ({ className }) => {
  const [requestData, setRequestData] = useState({ url: "" });
  const [response, setResponse] = useState(null);
  return (
    <div className="-translate-y-1/2 bg-[#421E47] w-dvh px-6 py-8  rounded-lg mx-16 md:mx-32 z-20">
      <div className="w-full">
        <form className="flex flex-col md:flex-row gap-3 md:gap-5 ">
          <input
            type="text"
            className="w-full px-9 py-4 md:h-auto rounded-lg  text-xl bg-white"
            required
            placeholder="Shortnen a link here..."
          />
          <Button className={className}>Shorten It!</Button>
          <viewComponent/>
        </form>
      </div>
    </div>
  );
};

Shortly.propTypes = {
  className: PropTypes.string,
};

export default Shortly;
