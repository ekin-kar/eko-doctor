import Image from "next/image";
import hero1 from "/public/hero1.jpeg";
import Seperator from "./Seperator";
const Main = () => {
  return (
    <div className="relative h-first-content w-full">
      <Image
        src={hero1}
        alt="Picture of the author"
        fill
        className="object-cover"
      />
      <div className="relative z-10 h-full w-full flex items-start justify-start">
        <div className="max-w-7xl h-full flex items-start justify-start px-4 sm:px-16 md:px-60">
          <div className="mt-20 sm:mt-32 md:mt-60">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              The right help
            </h1>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white">
              for your health
            </h1>
            <Seperator />
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]">
              Dr. Emily Wilson is a seasoned psychiatrist with over 20 years of
              professional experience. Her expertise in treating depression,
              anxiety, and other psychiatric conditions makes her the ideal
              choice for patients seeking personalized mental health care and
              support.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <button className="bg-first-color hover:bg-orange-900 text-white text-sm font-semibold px-4 sm:px-12 py-4 mt-4 flex-1 sm:flex-none transition-colors duration-500">
                FIND OUT MORE
              </button>
              <button className="bg-second-color hover:bg-orange-950 text-white text-sm font-semibold px-4 sm:px-12 py-4 mt-4 flex-1 sm:flex-none transition-colors duration-500">
                CONTACT
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
