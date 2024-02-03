import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const navigate = useNavigate();

  const [username, setusername] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const register = async (e, history) => {
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
      <div>
        <h1 className="text-center text-4xl">Register Page</h1>
        <form onSubmit={register} className="flex flex-col">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => setusername(e.target.value)}
            className="mb-10 border-2 border-black"
          />
          <label htmlFor="name">Name</label>
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            className="mb-10 border-2 border-black"
          />
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
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
            Sign Up
          </button>
        </form>
      </div>
    </>
  );
}

export default RegisterPage;
