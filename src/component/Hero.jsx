import React from "react";
import People from "../assets/img/people.png";
import Arrow from "../assets/icon/Arrow";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div id="Home" className="bg-[#222831] py-5 lg:flex gap-11 lg:px-20">
      <div
        className="w-full py-5 px-5 order-1 lg:order-2 lg:px[180px] lg:w-[547px] lg:h-[655px]"
        data-aos="fade-right"
        data-aos-easing="ease-in-sine"
        data-aos-duration="500"
        data-aos-delay="0"
      >
        <img src={People} />
      </div>
      <div className="order-2 lg:order-1 lg:mt-[200px]">
        <div className="lg:flex ">
          <div className="hidden lg:block">
            <Arrow />
          </div>
          <div className=" font-bold text-center lg:text-left">
            <h1 className="text-[#FFFFFF] text-[36px] lg:text-[80px]">
              Reza Fahmi
            </h1>
            <h1 className="text-[#00ADB5] text-[30px] lg:text-[80px]">
              Pahlevi
            </h1>
            <div className=" flex gap-2 justify-center">
              <h1 className="text-[25px] text-[#FFFFFF] lg:text-[32px]">
                I'am
              </h1>
              <div className="text-gradient">
                <TypeAnimation
                  sequence={[
                    "UI/UX Desaiger",
                    1000,
                    "Front-End Developer",
                    1000,
                    "Informatics Student",
                    1000,
                  ]}
                  className="text-[25px] lg:text-[32px]"
                  wrapper="span"
                  speed={50}
                  style={{ display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
