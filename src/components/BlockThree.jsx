import React from "react";
import Img from "../assets/FirstPageImage/BlockThreeImg.png";
const BlockThree = () => {
  return (
    <div className="bg-black flex justify-between items-center">
      <div className="">
        <img src={Img} alt="" className="" />
      </div>
      <div className="text-white text-center">
        <h2 className="text-5xl">Our Values</h2>
        <p className="my-10 text-gray-300">
          {" "}
          At Local Face, our perfume retail store is built on a foundation <br /> of
          passion and authenticity. We believe in celebrating the <br /> individuality
          of every customer, providing a diverse collection of <br /> scents that
          resonate with their unique personality and style. Our <br /> dedicated team
          of fragrance enthusiasts is committed to creating a <br /> welcoming and
          inclusive environment, where connections are <br /> forged, and inspiration
          thrives.{" "}
        </p>
        <p className="text-gray-300">
          {" "}
          Embracing sustainability and continuous learning, Local Face <br /> strives
          to be more than just a shopping destination; we are a <br /> community that
          inspires and empowers individuals on their <br /> fragrance journey.
        </p>
      </div>
    </div>
  );
};

export default BlockThree;
