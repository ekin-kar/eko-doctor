import Header1 from "./Header1";
import Header2 from "./Header2";
import Paragraph from "./Paragraph";
import Seperator from "./Seperator";
import { BsChatRightText } from "react-icons/bs";
import { FiCoffee } from "react-icons/fi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineBulb } from "react-icons/ai";
import people from "/public/people.jpg";
import Image from "next/image";

const Clients = () => {
  return (
    <div className="flex flex-col md:flex-row h-content w-full">
      <div className="flex-1 flex flex-col items-start justify-center h-full gap-16">
        <div className="px-6">
          <Header2>Hear from our clients</Header2>
          <Seperator />
          <Header1>
            <span className="text-first-color">OUR </span>clients love us
          </Header1>
          <Paragraph className="text-black">
            Dr Joanna Bryan has an awful lot of clients that can testify to her
            success. Cras odio lorem, tincidunt pellentesque lectus porttitor,
            hendrerit pulvinar felis. Duis urna dolor, vestibulum sed massa a,
            gravida faucibus risus. Morbi euismod ipsum ut sodales ullamcorper.
            Maecenas gravida enim a laoreet suscipit.
          </Paragraph>
        </div>
        <div className="px-6">
          <div className="grid grid-cols-1 gap-4 mt-2 md:grid-cols-2">
            <div className="flex items-start">
              <div className="mr-4 mt-2 text-first-color">
                <BsChatRightText size={30} />
              </div>
              <div>
                <p className="font-bold">TALKING ABOUT THE PROBLEM</p>
                <p className="text-xs">
                  Donec sollicitudin justo eget tortor porta, id maximus ex
                  facilisis. Integer facilisis pulvinar commodo. Integer sed
                  placerat quam. Praesent dictum velit ut tempor molestie.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-2 text-first-color">
                <FiCoffee size={30} />
              </div>
              <div>
                <p className="font-bold">ONGOING DISCUSSION</p>
                <p className="text-xs">
                  Donec sollicitudin justo eget tortor porta, id maximus ex
                  facilisis. Integer facilisis pulvinar commodo. Integer sed
                  placerat quam. Praesent dictum velit ut tempor molestie.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-2 text-first-color">
                <AiOutlineThunderbolt size={30} />
              </div>
              <div>
                <p className="font-bold">ANALYSIS</p>
                <p className="text-xs">
                  Donec sollicitudin justo eget tortor porta, id maximus ex
                  facilisis. Integer facilisis pulvinar commodo. Integer sed
                  placerat quam. Praesent dictum velit ut tempor molestie.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <div className="mr-4 mt-2 text-first-color">
                <AiOutlineBulb size={30} />
              </div>
              <div>
                <p className="font-bold">SOLVING THE PROBLEM</p>
                <p className="text-xs">
                  Donec sollicitudin justo eget tortor porta, id maximus ex
                  facilisis. Integer facilisis pulvinar commodo. Integer sed
                  placerat quam. Praesent dictum velit ut tempor molestie.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 relative h-64 md:h-full w-full min-h-[300px] md:min-h-0">
        <Image
          src={people}
          alt="Picture of people"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Clients;
