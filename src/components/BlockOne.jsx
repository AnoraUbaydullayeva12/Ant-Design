import React from "react";
import BgImg from "../assets/FirstPageImage/bg.img.png";
const BlockOne = () => {
  return (
    <div className="bg-black flex justify-between items-center">
      <div className="text-white">
        <h1 className="text-5xl font-light leading-15 mb-5" >
          Elevate Your Spirit with Victory <br /> Scented Fragrances!
        </h1>
        <p className="font-light leading-relaxed">
          Shop now and embrace the sweet smell of victory <br /> with Local
          Face.
        </p>
        <button className="py-3 px-4 font-bold my-15 rounded bg-[#AB572D]" >Shop Now</button>
      </div>
      <div className="">
        <img src={BgImg} alt="" className="" />
      </div>
    </div>
  );
};

export default BlockOne;
