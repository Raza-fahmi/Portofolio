import React from "react";
import People from "../assets/icon/People";
import Arrow from "../assets/icon/Arrow";
import { TypeAnimation } from "react-type-animation";

export default function Hero() {
  return (
    <div
      id="Home"
      className="bg-[#222831] flex w-full pt-[202px] scroll-smooth focus:scroll-auto"
    >
      <div className="pl-44">
        <div className=" flex font-bold ">
          <Arrow />
          <div>
            <h1 className="text-[#FFFFFF] text-[80px]">Reza Fahmi</h1>
            <h1 className="text-[#00ADB5] text-[80px]">Pahlevi</h1>
            <div className=" flex gap-2">
              <h1 className="text-[32px] text-[#FFFFFF]">I'am</h1>
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
                  wrapper="span"
                  speed={50}
                  style={{ fontSize: "2em", display: "inline-block" }}
                  repeat={Infinity}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <People />
      </div>
    </div>
  );
}
