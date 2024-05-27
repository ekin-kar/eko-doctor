import Link from "next/link";
import React from "react";
import { FaBrain } from "react-icons/fa6";
const Header = () => {
  return (
    <div className="w-full border-b border-gray-200 h-16">
      <div className="max-w-7xl h-full m-auto flex items-center justify-between p-3">
        <div>
          <Link
            href="/"
            className="font-bold text-orange-900 text-xl flex items-center gap-2"
          >
            <FaBrain className="text-orange-900" size={25} />
            EkoDoctor
          </Link>
        </div>
        <div className="flex gap-4 font-semibold">
          <Link href="/">Home</Link>
          <Link href="/about">About</Link>
          <Link href="/services">Services</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
