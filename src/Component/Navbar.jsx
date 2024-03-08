import { useState } from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const HandleNavigation = () => setNav(!nav);
  return (
    <div className="w-screen h-[100px] z-10 fixed drop-shadow-sm">
      <div className="px-8 sm:px-32 flex justify-between w-full h-full">
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-3xl font-bold sm:text-4xl">SHORTLY</h1>
          <ul className="hidden md:flex font-bold justify-around space-x-2">
            <li className="opacity-50">Features</li>
            <li className="opacity-50">Pricing</li>
            <li className="opacity-50">Resources</li>
          </ul>
        </div>
        <div className="hidden md:flex font-bold justify-between gap-5 items-center">
          <button>Login</button>
          <button className="bg-[#00FFFF] text-white font-bold px-7 py-2 rounded-full">
            Sign Up
          </button>
        </div>
        {/* Button */}
        <div className="flex md:hidden items-center">
          <FaBars className="text-3xl" onClick={HandleNavigation} />
        </div>
      </div>
      {/* dropdown */}
      <div
        className={
          !nav ? "hidden" : "md:hidden absolute w-full text-white px-8 text-xl font-bold"
        }
      >
        <ul className="bg-[#421E47] w-full items-center flex justify-center text-white flex-col rounded-3xl">
          <li className="my-10">Features</li>
          <li>Pricing</li>
          <li className="my-10">Resources</li>
          
          <div className="flex flex-col font-bold justify-between w-full gap-8 items-center mb-5">
          <hr className="bg-white text-white w-[90%] font-bold px-6"/>
            <button>Login</button>
            <buttton className="bg-[#00FFFF] text-white w-[90%] text-center font-bold px-6 py-3 rounded-3xl">
              Sign Up
            </buttton>
          </div>
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;
