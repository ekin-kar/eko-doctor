import Image from "next/image";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Paragraph from "./Paragraph";
import Seperator from "./Seperator";
import family from "/public/family.jpg";
import { PiEyeglasses } from "react-icons/pi";
import { CiCloudOn } from "react-icons/ci";
import { BiConversation } from "react-icons/bi";
import { FiSun } from "react-icons/fi";

const Help = () => {
  return (
    <div className="flex flex-col h-content w-full">
      <div className="flex-2 bg-first-color flex justify-start items-center text-white flex-col md:flex-row h-content w-full">
        <div className="flex-1 p-6">
          <Header2>I am here for you</Header2>
          <Seperator className="bg-white" />
          <Header1>How can I help?</Header1>
          <Paragraph>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            id voluptates obcaecati voluptas sequi ipsum inventore nesciunt,
            commodi nam, beatae expedita, adipisci modi alias accusamus. Nobis
            nam velit aperiam deleniti.
          </Paragraph>
          <button className="bg-second-color hover:bg-orange-950 text-white text-sm font-semibold px-4 sm:px-12 py-4 mt-4 flex-1 sm:flex-none transition-colors duration-500">
            CONTACT
          </button>
        </div>
        <div className="flex-1 relative h-1/2 md:h-full w-full">
          <Image
            src={family}
            alt="Picture of the family"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      <div className="flex-1 bg-gray-400 flex flex-wrap">
        <div className="w-full md:w-1/4 p-4 bg-gradient-to-r from-orange-800 to-orange-900 relative text-gray-100">
          <div className="w-20 h-20 bg-orange-900 text-white flex items-center justify-center rounded-full absolute -top-10 left-6 mb-2 icon-wrapper">
            <PiEyeglasses size={40} />
          </div>
          <Header2 className="mt-12">BEST PSYCHOLOGICAL PROCEDURES</Header2>
          <p className="min-w-[300px] sm:min-w-[100px]">
            Quisque tincidunt est et ex elementum semper. Suspendisse a ipsum et
            sapien interdum lacinia eu eget dolor. Donec accumsan dictum
            malesuada. Etiam at nisi orci. Morbi lobortis hendrerit felis a
            commodo. Nulla lacinia accumsan sodales.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-gradient-to-r from-orange-800 to-orange-900 relative text-gray-100">
          <div className="w-20 h-20 bg-orange-900 text-white flex items-center justify-center rounded-full absolute -top-10 left-6 mb-2 icon-wrapper">
            <CiCloudOn size={40} />
          </div>
          <Header2 className="mt-12">ANALYZING THE ISSUES TOGETHER</Header2>
          <p className="min-w-[300px] sm:min-w-[100px]">
            Quisque tincidunt est et ex elementum semper. Suspendisse a ipsum et
            sapien interdum lacinia eu eget dolor. Donec accumsan dictum
            malesuada. Etiam at nisi orci. Morbi lobortis hendrerit felis a
            commodo. Nulla lacinia accumsan sodales.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-gradient-to-r from-orange-800 to-orange-900 relative text-gray-100">
          <div className="w-20 h-20 bg-orange-900 text-white flex items-center justify-center rounded-full absolute -top-10 left-6 mb-2 icon-wrapper">
            <BiConversation size={40} />
          </div>
          <Header2 className="mt-12">
            TALKING, LISTENING & UNDERSTANDING YOU
          </Header2>
          <p className="min-w-[300px] sm:min-w-[100px]">
            Quisque tincidunt est et ex elementum semper. Suspendisse a ipsum et
            sapien interdum lacinia eu eget dolor. Donec accumsan dictum
            malesuada. Etiam at nisi orci. Morbi lobortis hendrerit felis a
            commodo. Nulla lacinia accumsan sodales.
          </p>
        </div>
        <div className="w-full md:w-1/4 p-4 bg-gradient-to-r from-orange-800 to-orange-900 relative text-gray-100">
          <div className="w-20 h-20 bg-orange-900 text-white flex items-center justify-center rounded-full absolute -top-10 left-6 mb-2 icon-wrapper">
            <FiSun size={40} />
          </div>
          <Header2 className="mt-12">
            LIGHT AT THE END OF THE DARK TUNNEL
          </Header2>
          <p className="min-w-[300px] sm:min-w-[100px]">
            Quisque tincidunt est et ex elementum semper. Suspendisse a ipsum et
            sapien interdum lacinia eu eget dolor. Donec accumsan dictum
            malesuada. Etiam at nisi orci. Morbi lobortis hendrerit felis a
            commodo. Nulla lacinia accumsan sodales.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Help;
