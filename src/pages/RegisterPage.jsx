import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/register", {
        username,
        name,
        email,
        password,
      });

      navigate("/");
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <>
      <div className="relative  h-screen w-full bg-[#23232f]">
        <div className="absolute left-1/2 top-1/2 z-0 w-full -translate-x-1/2 -translate-y-1/2 text-center font-[Montserrat] text-[30vh] uppercase tracking-wide text-[#72748e]">
          Register
        </div>
        <div className="relative z-10 flex h-screen w-full items-center justify-center">
          <div className="items-cente flex h-[70vh]  w-[35vw]  rounded-2xl border-2 backdrop-blur-lg ">
            <form
              onSubmit={register}
              className="flex h-full w-full flex-col items-center"
            >
              <h1 className="pt-14 font-[Poppins] text-4xl font-extrabold text-white">
                Create an Account
              </h1>
              <input
                type="text"
                name="Username"
                value={username}
                onChange={(e) => setusername(e.target.value)}
                placeholder="Enter your username"
                className="mt-6 h-8 w-[65%] rounded-md "
              />
              <input
                type="text"
                name="Name"
                value={name}
                onChange={(e) => setname(e.target.value)}
                placeholder="Enter your name"
                className="mt-6 h-8 w-[65%] rounded-md "
              />
              <input
                type="text"
                name="Email"
                value={email}
                onChange={(e) => setemail(e.target.value)}
                placeholder="Enter your email"
                className="mt-6 h-8 w-[65%] rounded-md "
              />
              <input
                type="password"
                name="Password"
                value={password}
                onChange={(e) => setpassword(e.target.value)}
                placeholder="Enter your password"
                className="mt-8 h-8 w-[65%] rounded-md border-2 border-black"
              />
              <button className="mt-10 w-[60%] rounded-2xl bg-[#676eff] font-[Poppins] text-2xl">
                Login
              </button>
              <div className="flex gap-2 text-xl text-[#72748e] mt-8">
                <h3>Have an account already??</h3>
                <Link to="/Login" className="text-[#676eff]">
                  Log In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterPage;
