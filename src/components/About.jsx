import Image from "next/image";
import hero2 from "/public/hero2.jpg";
import logobgn from "/public/logo-bgn.png";
import Seperator from "./Seperator";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Paragraph from "./Paragraph";

const About = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center h-content w-full">
      <div className="flex-1 relative h-1/2 md:h-full w-full">
        <Image
          src={hero2}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex-1 flex justify-center items-center h-1/2 md:h-full w-full bg-second-color text-white relative p-6">
        <div className="p-6 max-w-full md:max-w-lg lg:max-w-4xl">
          <Header2>The name behind the perfect results</Header2>
          <Header1>Dr. Ekin Kar</Header1>
          <Seperator />
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni
            eveniet distinctio, nobis omnis porro itaque dolor, eos quisquam
            soluta delectus aliquam minus voluptatem doloribus, fugiat
            excepturi. Ipsam, facilis quasi.
          </Paragraph>
        </div>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <Image
            src={logobgn}
            alt="Picture of the company"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
