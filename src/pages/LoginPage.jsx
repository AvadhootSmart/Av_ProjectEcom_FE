import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:5000/login", {
      username,
      password,
    });
    navigate("/");
  };
  return (
    <>
      <div>
        <h1 className="text-center text-4xl">Login Page</h1>
        <form onSubmit={handleSubmit} className="flex flex-col">
          <label htmlFor="Username">Username</label>
          <input
            type="text"
            name="Username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="mb-10 border-2 border-black"
          />

          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className="border-2 border-black"
          />
          <button type="submit" className="mt-10 w-1/2 rounded-md bg-red-400">
            Login
          </button>
          <Link to="/Register" className="mt-10 w-1/2 rounded-md bg-red-400">
            Create Account
          </Link>
        </form>
      </div>
    </>
  );
}

export default LoginPage;
