import React from "react";
import Hero from "./Hero";
import About from "./About";
import Project from "./Project";

export default function Navbar() {
  return (
    <nav className="bg-[#222831] justify-between flex px-16 py-7  border-b-[1px] border-[#00ADB5]">
      <div
        className=" font-bold text-[24px] text-gradient"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="0"
      >
        <h1>Fahmeza</h1>
      </div>
      <div
        className="flex gap-12 text-[18px] text-[#EEEEEE]"
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <a className="hover:underline underline-offset-3" href="#Home">
          Home
        </a>
        <a className="hover:underline underline-offset-3" href="#About">
          About Me
        </a>
        <a className="hover:underline underline-offset-3" href="#Project">
          Project
        </a>
      </div>
    </nav>
  );
}
