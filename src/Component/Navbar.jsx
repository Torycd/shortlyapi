import { useState } from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-[80px] z-10 fixed">
      <div className="px-16 flex justify-between w-full h-full">
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
          <buttton className="bg-black text-white font-bold px-4 py-2 rounded-3xl">Sign Up</buttton>
        </div>
        {/* Button */}
        <div>
        
        </div>
      </div>
      {/* dropdown */}
      <div>

      </div>
    </div>
  );
};

export default Navbar;
