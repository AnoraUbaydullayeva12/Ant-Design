import React from "react";
import BgImg from "../assets/FirstPageImage/BlockTwoImg.png";

const BlockTwo = () => {
  return (
    <div>
      <div
        className="flex justify-center items-center bg-cover bg-center min-h-screen"
        style={{ backgroundImage: `url(${BgImg})` }}
      >
        <div className="text-white">
          <h2 className="text-5xl font-semibold mb-4 text-center text-[#AB572D]">Welcome to Local Face</h2>
          <p className=" text-center font-extralight text-gray-300 text-lg ">
            Welcome to Local Face Perfumes, where the spirit of victory and triumph come alive <br />
            through scents that empower and inspire. Our curated collection, aptly named "Victory <br /> Scented,"
            is a celebration of success and elegance, designed to unleash your victorious <br /> essence. Indulge
            in the sweet taste of triumph with captivating fragrances that tell the <br /> tale of your achievements.
            At Local Face, we believe that every victory deserves a <br /> signature scent, and we are dedicated to
            providing unforgettable fragrances that <br /> elevate your spirit and empower your journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlockTwo;
