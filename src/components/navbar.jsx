import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="w-full h-[15vh] font-[Poppins] text-white flex items-center justify-between p-12 bg-[#23232f]">
        <div className="left flex">
          <img src="/Logo.png" alt="logo" className="h-16 w-16 object-cover" />
          <ul className="mx-10 flex gap-14 items-center">
            <Link to="/mouse">Mouse</Link>
            <Link to="/">Keyboard</Link>
            <Link to="/">Headset</Link>
            <Link to="/">Mousepad</Link>
          </ul>
        </div>
        <div className="right flex">
          <div className="profile flex mx-16 gap-5 items-center">
            <img src="/Messi Pfp.jpg" className="h-10 w-10 rounded-full object-cover"></img>
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
