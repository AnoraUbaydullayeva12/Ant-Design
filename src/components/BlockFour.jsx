import React from "react";
import Img from "../assets/FirstPageImage/BlockFourImg.png";
import Img1 from "../assets/FirstPageImage/BlockFourImg2.png";
import Img2 from "../assets/FirstPageImage/BlockFourImg3.png";
import Img3 from "../assets/FirstPageImage/BlockFourImg4.png";

const BlockFour = () => {
  return (
    <div className="bg-black">
      <h2 className="text-5xl text-center pb-15 pt-30 text-white">Best selling products</h2>
      <div className="flex justify-between items-center">
        <div className="bg-[#3D3D3D] rounded-2xl text-white p-3 text-center">
          <img src={Img} alt="" className="" />
          <div className="">
            <h3 className="text-lg">Luxurious Elixir Rough</h3>
            <p className="flex justify-center gap-4">
              <span className="text-orange-700">$ 220.00 </span> 100ml
            </p>
          </div>
        </div>
        <div className="bg-[#3D3D3D] rounded-2xl text-white p-3 text-center">
          <img src={Img1} alt="" className="" />
          <div className="">
            <h3 className="text-lg">Luxurious Elixir Rough</h3>
            <p className="flex justify-center gap-4">
              <span className="text-orange-700">$ 220.00 </span> 100ml
            </p>
          </div>
        </div>
        <div className="bg-[#3D3D3D] rounded-2xl text-white p-3 text-center">
          <img src={Img2} alt="" className="" />
          <div className="">
            <h3 className="text-lg">Luxurious Elixir Rough</h3>
            <p className="flex justify-center gap-4">
              <span className="text-orange-700">$ 220.00 </span> 100ml
            </p>
          </div>
        </div>
        <div className="bg-[#3D3D3D] rounded-2xl text-white p-3 text-center">
          <img src={Img3} alt="" className="" />
          <div className="">
            <h3 className="text-lg">Luxurious Elixir Rough</h3>
            <p className="flex justify-center gap-4">
              <span className="text-orange-700">$ 220.00 </span> 100ml
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockFour;
