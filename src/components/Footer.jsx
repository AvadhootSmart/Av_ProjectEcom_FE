import React from "react";
import { FaGithub, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <div className="min-h-[40vh] w-full bg-[#111117] text-white text-xl flex justify-between p-10">
        <div className="links flex gap-24 p-4">
          <ul className="list flex flex-col gap-4 text-2xl">
            <a href="/">
              <FaGithub />
            </a>
            <a href="/">
              <FaInstagram />
            </a>
            <a href="/">
              <FaTwitter />
            </a>
          </ul>
          <ul className="list flex flex-col gap-2">
            <a href="/">Mouse</a>
            <a href="/">Keyboards</a>
            <a href="/">Headsets</a>
            <a href="/">Mousepads</a>
          </ul>
          <ul className="flex flex-col gap-2">
            <a href="">Register</a>
            <a href="">Login</a>
            <a href="">FAQs</a>
            <a href="">About</a>
          </ul>
        </div>
        <div className="about">
          <p className="max-w-[30vw] text-l text-[#72748e]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse culpa
            reiciendis numquam iusto illum sit dolorum odit maiores rem
            excepturi obcaecati distinctio, vel, vitae similique inventore, modi
            perspiciatis fugiat? Iste?
          </p>
        </div>
      </div>
      <div className="copyright flex justify-between items-center px-10 border-y border-[#72748e] h-[10vh] bg-[#111117] text-white">
        <p>Copyright&copy; 2023, All rights reserved </p>
        <a href="https://github.com/AvadhootSmart">
          <img src="/Logo.png" className="h-16 w-16 object-cover invert" />
        </a>
      </div>
    </>
  );
};

export default Footer;
