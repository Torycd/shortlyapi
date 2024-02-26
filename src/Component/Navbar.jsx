import { useState } from "react";

import { FaBars } from "react-icons/fa";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const HandleNavigation = () => setNav(!nav)
  return (
    <div className="w-screen h-[100px] z-10 fixed drop-shadow-lg">
      <div className="px-8 sm:px-16 flex justify-between w-full h-full">
        <div className="flex justify-between items-center gap-10">
          <h1 className="text-3xl font-bold sm:text-4xl">SHORTLY</h1>
          <ul className="hidden md:flex font-bold justify-around space-x-2">
            <li>Features</li>
            <li>Pricing</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className="hidden md:flex justify-between gap-5 items-center">
          <button>Login</button>
          <buttton className="bg-black text-white font-bold px-4 py-2 rounded-3xl">
            Sign Up
          </buttton>
        </div>
        {/* Button */}
        <div className="flex md:hidden items-center">
          <FaBars className="text-3xl" onClick={HandleNavigation}/>
        </div>
      </div>
      {/* dropdown */}
      <div className={!nav ? "md:hidden absolute w-full text-white px-8" : "hidden"}>
        <ul className="bg-black w-full items-center flex justify-center text-white flex-col rounded-3xl">
          <li className="my-8">Features</li>
          <li>Pricing</li>
          <li className="my-8">Resources</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
