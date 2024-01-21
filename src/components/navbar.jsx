import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="nav w-full h-[15vh] font-[Poppins] text-white flex items-center justify-between p-12">
        <div className="left flex">
          <img src="/Logo.png" alt="logo" className="h-16 w-16 object-cover" />
          <ul className="mx-10 flex gap-14 items-center">
            <a href="/Mouse">Mouse</a>
            <a href="/">Keyboard</a>
            <a href="/">Headsets</a>
            <a href="/">Mousepads</a>
          </ul>
        </div>
        <div className="right flex">
          <div className="profile flex mx-16 gap-5 items-center">
            {/* <img src="" alt="" /> */}
            <p className="h-10 w-10 rounded-full bg-red-800"></p>
            <h4>John Doe</h4>
          </div>
          <div className="cart">
            <p className="h-10 w-10 rounded-full bg-black"></p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
