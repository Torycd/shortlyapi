// import PropTypes from "prop-types";
import { useState } from "react";
import useHttp from "./Use-https";
import ViewComponent from "./ViewComponent";


const Shortly = () => {
  const [urlInput, setUrlInput] = useState("");
  const { response, error, fetchData } = useHttp();

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const fetchUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
      urlInput
    )}`;
    fetchData(fetchUrl);
  };

  return (
    <div className="w-dvh">
      <div className="-translate-y-1/2 bg-[#421E47] px-6 py-8  rounded-lg mx-16 md:mx-32 z-20">
        <div className="w-full">
          <form
            className="flex flex-col md:flex-row gap-3 md:gap-5"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="w-full md:w-[85%] px-9 py-4 md:h-auto rounded-lg  text-xl bg-white"
              required
              placeholder="Shorten a link here..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <button
              className="w-uto md:w-[15%] bg-[#00FFFF]  text-white text-xl font-bold px-9 py-4 rounded-lg"
              type="submit"
            >
              Shorten It!
            </button>
          </form>
        </div>
        
      </div>
      <ViewComponent response={response} error={error} />
    </div>
  );
};

// Shortly.propTypes = {
//   className: PropTypes.string,
// };

export default Shortly;
