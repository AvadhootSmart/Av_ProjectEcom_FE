import React from "react";
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";
const Navbar = () => {
  const location = useLocation();
  const user = useSelector((state) => state.auth.user);

  if (location.pathname === "/Login" || location.pathname === "/Register") {
    return null;
  }

  return (
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
            alt="profile"
          />
          {user ? <h1>{user.user.username}</h1> : <Link to="/Login">Login</Link>}
        </div>
        <div className="cart mt-16 flex flex-col gap-10">
          <div>
            <div className="text-3xl text-[#676eff]">
              <FaShoppingCart />
            </div>
          </div>
          <div>
            <p className="rotate-90 text-lg uppercase">$250</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
