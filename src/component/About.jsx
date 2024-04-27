import React from "react";
import Tune from "../assets/icon/Tune";
import Lightbup from "../assets/icon/Lightbup";
import Sleep from "../assets/icon/Sleep";
import Arrowup from "../assets/icon/Arrowup";

export default function About() {
  return (
    <div
      id="About"
      className="bg-[#222831] flex pl-12 pr-10 gap-10 pt-5 scroll-smooth focus:scroll-auto"
    >
      <div>
        <Sleep />
      </div>
      <div>
        <Tune />
        <div className="flex gap-5">
          <div
            className="pt-[70px] flex gap-5 font-bold text-[64px]"
            data-aos="fade-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="0"
          >
            <h1 className="text-[#FFFFFF]">About</h1>
            <h1 className="text-[#00ADB5]">Me</h1>
          </div>
          <Lightbup />
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <p className="text-[#EEEEEE]">
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
