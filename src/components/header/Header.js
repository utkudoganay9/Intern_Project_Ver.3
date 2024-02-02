import React from "react";
import { FaRegBell } from "react-icons/fa";
import { BiSolidExit } from "react-icons/bi";
import ThemeComp from "../themecomp/ThemeComp";



const Header = () => {
  
  return (
    <div className="flex items-center justify-between h-16 p-4 bg-gray-800 text-white">
  
  <ThemeComp />
  <div className="flex items-center space-x-4">
    <FaRegBell size={25} />
    <BiSolidExit size={25}  className="cursor-pointer" />
  </div>
</div>

  );
};

export default Header;
