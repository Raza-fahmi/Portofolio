import React from "react";
import background1 from "../assets/img/Bg.svg";
import Mind from "../assets/img/mindmetter.png";
import Puskesmas from "../assets/img/Rectangle.png";
import catetan from "../assets/img/chatetan.png";

export default function Project() {
  return (
    <div id="Project" className="bg-[#222831] relative ">
      <img
        src={background1}
        className="object-cover absolute mix-blend-screen h-full lg:w-auto lg:h-auto"
      />
      <div className="px-5 py-5 lg:py-64">
        <div
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <h1 className="text-[#00ADB5] font-bold text-[32px] px-[90px] lg:text-[64px]">
            My Recent <span className="text-white">Work</span>
          </h1>
        </div>
        <div className="flex gap-5 px-[100px]">
          <div
            className="shadow-md bg-[#393E46] rounded-lg lg:rounded-xl"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h1 className="ml-2 mr-2 font-bold text-sm text-gradient lg:text-[18px] lg:my-1">
              UI
            </h1>
          </div>
          <div
            className="shadow-md bg-[#393E46] rounded-lg lg:rounded-xl"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h1 className="ml-2 mr-2 font-bold text-sm text-gradient lg:text-[18px] lg:my-1">
              UX
            </h1>
          </div>
          <div
            className="shadow-md bg-[#393E46] rounded-lg lg:rounded-xl"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h1 className="ml-2 mr-2 font-bold text-sm text-gradient lg:text-[18px] lg:my-1">
              Web Design
            </h1>
          </div>
        </div>
        <div className="mt-5 px-20 lg:flex lg:gap-10">
          <div
            className="bg-[#393E46] rounded-lg w-[298px] h-[230px] mt-3"
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <img src={Mind} alt="image" className=" pt-10 w-auto h-auto" />
          </div>
          <div
            className="bg-[#393E46] rounded-lg w-[298px] h-[230px] mt-3"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <img
              src={Puskesmas}
              alt="image"
              className="w-[368px] h-[280px] ml-[30px] mt-[5px]"
            />
          </div>
          <div
            className="bg-[#393E46] rounded-lg w-[298px] h-[230px] mt-3"
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
            data-aos-delay="600"
          >
            <img
              src={catetan}
              alt="image"
              className="w-[90px] h-[180px] ml-[100px] pt-[25px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
