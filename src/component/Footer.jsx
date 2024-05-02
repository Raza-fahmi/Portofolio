import React from "react";
import Rumah from "../assets/icon/Rumah";
import Orang from "../assets/icon/Orang";
import Telepon from "../assets/icon/Telepon";
import Facebook from "../assets/icon/Facebook";
import Insta from "../assets/icon/Insta";

export default function Footer() {
  return (
    <div className="bg-[#222831] items-center pt-4">
      <div className="text-white flex mx-40 gap-7 lg:ml-[496px]">
        <div className="flex gap-2">
          <Rumah />
          <a href="#Home">Home</a>
        </div>
        <div className="flex gap-2">
          <Orang />
          <a href="#About">User</a>
        </div>
      </div>
      <div className="flex mx-48 mt-5 gap-7 lg:mx-[538px]">
        <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
        >
          <div className="ml-1 mt-1 mr-1 mb-1 ">
            <a href="https://www.facebook.com/reza.fahmi.9210256?sfnsn=wiwspwa&mibextid=RUbZ1f">
              <Facebook />
            </a>
          </div>
        </button>
        <button
          type="button"
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 rounded-md"
        >
          <div className="ml-1 mt-1 mr-1 mb-1 ">
            <a href="https://www.instagram.com/ra.fahm13/">
              <Insta />
            </a>
          </div>
        </button>
      </div>
      <div className="text-white mt-4">Copyright © Reza Fahmi 2024</div>
    </div>
  );
}
