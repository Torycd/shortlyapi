import { useState } from "react";
import useHttp from "./Use-https";
import Showcontent from "../UI/Showcontent";


const Shortly = () => {
  const [urlInput, setUrlInput] = useState("");
  const { response, fetchData } = useHttp();
  const [isloading, setIsLoading] = useState(false)

  async function handleFormSubmit(event) {
    event.preventDefault();
    setIsLoading(true)
    const fetchUrl = `https://tinyurl.com/api-create.php?url=${encodeURIComponent(
      urlInput
    )}`;
    await fetchData(fetchUrl);
    setIsLoading(false)
    setUrlInput("");
  }

  return (
    <section className="w-dvh">
      <div className="-translate-y-1/2 bg-[#421E47] px-6 py-4 rounded-lg mx-10 md:mx-32 z-20">
        <div className="w-full">
          <form
            className="flex flex-col md:flex-row gap-3 md:gap-5"
            onSubmit={handleFormSubmit}
          >
            <input
              type="text"
              className="w-full md:w-[85%] px-5 py-2 md:h-auto rounded-lg  bg-white"
              required
              placeholder="Shorten a link here..."
              value={urlInput}
              onChange={(e) => setUrlInput(e.target.value)}
            />
            <button
              className="w-auto md:w-[15%] bg-[#00FFFF] text-white text-xl font-bold px-4 py-2 rounded-lg hover:opacity-90"
              type="submit"
            >
              Shorten It!
            </button>
          </form>
        </div>
      </div>
      {/* <ViewComponent response={response} error={error} /> */}
      <Showcontent response={response} loading="Content is loading" isloading={isloading} fetchData={fetchData}  />
    </section>
  );
};

export default Shortly;
