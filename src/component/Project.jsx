import React from "react";
import background1 from "../assets/img/Bg.svg";
import Mind from "../assets/img/mindmetter.png";
import Puskesmas from "../assets/img/Rectangle.png";
import catetan from "../assets/img/chatetan.png";

export default function Project() {
  return (
    <div
      id="Project"
      className="bg-[#222831] relative w-full scroll-smooth focus:scroll-auto"
    >
      <img
        src={background1}
        className="object-cover absolute mix-blend-screen"
      />
      <div className="pt-[268px] pl-[120px] pr-[120px] pb-[269px]">
        <div
          className="flex gap-5"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="500"
          data-aos-delay="0"
        >
          <h1 className="text-[#00ADB5] font-bold text-[64px]">My Recent</h1>
          <h1 className="text-white font-bold text-[64px]">Work</h1>
        </div>
        <div className="flex gap-5">
          <div
            className="shadow-md bg-[#393E46] rounded-lg"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h1 className="ml-2 mr-2 font-bold text-[18px] text-gradient">
              UI
            </h1>
          </div>
          <div
            className="shadow-md bg-[#393E46] rounded-lg"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h1 className="ml-2 mr-2 font-bold text-[18px] text-gradient">
              UX
            </h1>
          </div>
          <div
            className="shadow-md bg-[#393E46] rounded-lg"
            data-aos="flip-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="500"
            data-aos-delay="100"
          >
            <h1 className="ml-2 mr-2 font-bold text-[18px] text-gradient">
              Web Design
            </h1>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-10 mt-5">
          <div
            className="bg-[#393E46] rounded-lg w-[298px] h-[230px]"
            data-aos="zoom-in-right"
            data-aos-easing="ease-in-sine"
            data-aos-duration="900"
            data-aos-delay="200"
          >
            <div className="">
              <img
                src={Mind}
                alt="image"
                className=" mt-[40px] w-auto h-auto"
              />
            </div>
          </div>
          <div
            className="bg-[#393E46] rounded-lg w-[298px] h-[230px]"
            data-aos="zoom-in-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="800"
            data-aos-delay="400"
          >
            <div className="">
              <img
                src={Puskesmas}
                alt="image"
                className="w-[368px] h-[280px] ml-[30px] mt-[5px]"
              />
            </div>
          </div>
          <div
            className="bg-[#393E46] rounded-lg w-[298px] h-[230px]"
            data-aos="zoom-in-left"
            data-aos-easing="ease-in-sine"
            data-aos-duration="700"
            data-aos-delay="600"
          >
            <div>
              <img
                src={catetan}
                alt="image"
                className="w-[90px] h-[180px] ml-[100px] mt-[25px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
