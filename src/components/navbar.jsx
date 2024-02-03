import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
const Navbar = () => {
  return (
    <>
      <div className="flex h-[15vh] w-full items-center justify-between bg-[#23232f] p-12 font-[Poppins] text-white">
        <div className="left flex">
          <img src="/Logo.png" alt="logo" className="h-16 w-16 object-cover" />
          <ul className=" mx-16 flex items-center gap-14">
            <Link to="/mouse">Mouse</Link>
            <Link to="/">Keyboard</Link>
            <Link to="/">Headset</Link>
            <Link to="/">Mousepad</Link>
          </ul>
        </div>
        <div className="right flex">
          <div className="profile mx-16 flex items-center gap-5">
            <img
              src="/Messi Pfp.jpg"
              className="h-10 w-10 rounded-full object-cover"
            ></img>
            <h4>John Doe</h4>
          </div>
          <div className="cart  flex flex-col gap-10 mt-16">
            <div>
              <div className="text-3xl text-[#676eff]">
                <FaCartShopping />
              </div>
            </div>
            <div>
              <p className="rotate-90 text-lg uppercase ">$250</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
