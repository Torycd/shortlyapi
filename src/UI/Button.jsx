import PropTypes from "prop-types";

const Button = ({children}) => {
  return (
    <div
      className="bg-[#00FFFF] w-auto text-white text-xl font-bold px-9 py-4 rounded-lg"
    >
      {children}
    </div>
  );
};
Button.propTypes = {
  children: PropTypes.node,
};
export default Button;