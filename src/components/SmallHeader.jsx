import React from "react";
import { FaRegClock } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import HeaderIcons from "./HeaderIcons";

const SmallHeader = () => {
  return (
    <div className="w-full border-b border-gray-200 h-12">
      <div className="max-w-6xl h-full m-auto flex items-center justify-between p-3">
        <div className=" gap-4 sm:flex hidden ">
          <div className="flex gap-2 items-center">
            <span className=" text-orange-700">
              <FaRegClock />
            </span>
            <p className="text-xs">
              Working Hours:{" "}
              <span className="font-bold">Monday-Friday 8:00AM-6:00PM</span>
            </p>
          </div>
          <div className="flex gap-2 items-center">
            <span className=" text-orange-700">
              <MdEmail />
            </span>
            <p className="text-xs">
              Email: <span className="font-bold">info@ekinkar.com</span>
            </p>
          </div>
        </div>
        <HeaderIcons />
      </div>
    </div>
  );
};

export default SmallHeader;
