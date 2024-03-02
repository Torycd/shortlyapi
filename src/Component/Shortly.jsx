import Button from "../UI/Button";
import PropTypes from "prop-types";

const Shortly = ({ className }) => {
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
        </form>
      </div>
    </div>
  );
};

Shortly.propTypes = {
  className: PropTypes.string,
};

export default Shortly;
