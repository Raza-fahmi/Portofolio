import React, { useState } from "react";
import Hamburger_active from "../assets/icon/Hamburger_active.svg";
import Hamburger_nonactive from "../assets/icon/Hamburger_nonactive.svg";

export default function Navbar() {
  const [toggleNavbar, setToggleNavbar] = useState(false);

  return (
    <nav className="bg-[#222831] justify-between border-b-[1px] border-[#00ADB5]">
      <div className="container mx-auto px-12 py-9 flex justify-between">
        <div className=" font-bold text-[24px] text-gradient">
          <h1>Fahmeza</h1>
        </div>
        <div className="hidden lg:flex gap-5">
          <div className="font-medium text-lg text-white cursor-pointer">
            <a href="#Home">Home</a>
          </div>
          <div className="font-medium text-lg text-white cursor-pointer">
            <a href="#About">About Me</a>
          </div>
          <div className="font-medium text-lg text-white cursor-pointer">
            <a href="#Project">Project</a>
          </div>
        </div>
        <div
          className="cursor-pointer lg:hidden"
          onClick={() => setToggleNavbar(toggleNavbar ? false : true)}
        >
          <img src={toggleNavbar ? Hamburger_active : Hamburger_nonactive} />
        </div>
      </div>
      <div className={`${toggleNavbar ? "block" : "hidden"} lg:hidden`}>
        <ul className="text-white text-lg font-semibold">
          <li
            className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-[#222831] cursor-pointer"
            href="#Home"
          >
            Home
          </li>
          <li
            className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-[#222831] cursor-pointer"
            href="#About"
          >
            About Me
          </li>
          <li
            className="px-12 py-[10px] border-b-2 border-white hover:bg-white hover:text-[#222831] cursor-pointer"
            href="#Project"
          >
            Contact
          </li>
        </ul>
      </div>
    </nav>
  );
}
