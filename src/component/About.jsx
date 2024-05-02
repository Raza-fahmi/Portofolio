import React from "react";
import Tune from "../assets/icon/Tune";
import Lightbup from "../assets/icon/Lightbup";
import Arrowup from "../assets/icon/Arrowup";
import Sleep from "../assets/img/sleep.png";

export default function About() {
  return (
    <div id="About" className="bg-[#222831] px-10 py-5 lg:flex">
      <div className="w-full py-5 px-5 lg:px[180px] lg:w-[1547px] ">
        <img src={Sleep} />
      </div>
      <div>
        <Tune />
        <div className="lg:flex">
          <div
            className="pt-[70px] font-bold text-[36px] px-2 text-center lg:text-[64px]"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <h1 className="text-[#FFFFFF]">
              About <span className="text-[#00adb5]">Me</span>
            </h1>
          </div>
          <div className="hidden lg:block">
            <Lightbup />
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
          className="px-"
        >
          <p className="text-[#EEEEEE] text-center text-sm lg:text-lg">
            I am a 6th semester student of the Informatics Engineering study
            program at Muhammadiyah University, Purwokerto, currently taking an
            independent study program in Website Development and UI/UX through
            the Kampus Merdeka with Infinite Learning partners.
          </p>
        </div>
        <div className="pl-28 pt-8">
          <Arrowup />
        </div>
      </div>
    </div>
  );
}
