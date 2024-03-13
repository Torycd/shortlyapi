import { useState } from "react";
import useHttp from "./Use-https";
import Showcontent from "../UI/Showcontent";

const Shortly = () => {
  const [urlInput, setUrlInput] = useState("");
  const { response, fetchData } = useHttp();

  function handleFormSubmit(event) {
    event.preventDefault();
    const fetchUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
      urlInput
    )}`;
    fetchData(fetchUrl);
    setUrlInput("");
  }

  return (
    <section className="w-dvh">
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
              className="w-uto md:w-[15%] bg-[#00FFFF]  text-white text-xl font-bold px-9 py-4 rounded-lg hover:opacity-90"
              type="submit"
            >
              Shorten It!
            </button>
          </form>
        </div>
      </div>
      {/* <ViewComponent response={response} error={error} /> */}
      <Showcontent response={response} fetchData={fetchData} />
    </section>
  );
};

export default Shortly;
