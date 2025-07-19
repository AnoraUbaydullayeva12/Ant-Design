import React from "react";
import { CiSearch } from "react-icons/ci";
import Logo from "../../assets/FirstPageImage/Logo.png";
import { FaRegUser } from "react-icons/fa";
import { IoMdHeartEmpty } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";
const Header = () => {
  return (
    <div className="bg-black">
      <div className="container max-w-[90%] mx-auto">
        <header className="py-2 ">
          <nav className="flex items-center justify-between py-5">
            <div className="">
              <img src={Logo} alt="" className="" />
            </div>

            <ul className="flex items-center text-white font-semibold justify-center gap-15 ">
              <li className="">Home </li>
              <li className="">Shop</li>
              <li className="">About us </li>
              <li className="">Services</li>
              <li className="">Blog</li>
            </ul>

            <div className="flex items-center gap-5 text-white text-2xl">
              <CiSearch />
              <FaRegUser />
              <IoMdHeartEmpty />
              <BiShoppingBag />
            </div>
          </nav>
        </header>
      </div>
    </div>
  );
};

export default Header;
