import React from "react";
import { LuClock3 } from "react-icons/lu";
import { IoMailOutline } from "react-icons/io5";
import HeaderIcons from "./HeaderIcons";

const SmallHeader = () => {
  return (
    <div className="w-full border-b border-gray-200 h-12">
      <div className="max-w-6xl h-full m-auto flex items-center justify-between p-3">
        <div className=" gap-4 sm:flex hidden ">
          <div className="flex gap-2 items-center">
            <span className=" text-orange-800">
              <LuClock3 />
            </span>
            <p className="text-xs">
              <span className="font-bold"> Working Hours: </span>
              Monday-Friday 8:00AM-6:00PM
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className=" text-orange-800">
              <IoMailOutline />
            </span>
            <p className="text-xs">
              <span className="font-bold"> Email: </span>info@ekinkar.com
            </p>
          </div>
        </div>
        <HeaderIcons />
      </div>
    </div>
  );
};

export default SmallHeader;
