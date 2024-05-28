import Image from "next/image";
import hero1 from "/public/hero1.jpg";

export default function Home() {
  return (
    <main className="h-content w-full">
      <div className="relative h-full w-full">
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
              <div className="h-0.5 w-8 md:w-16 bg-orange-700 mt-4 rounded-md"></div>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]">
                Dr. Emily Wilson is a seasoned psychiatrist with over 20 years
                of professional experience. Her expertise in treating
                depression, anxiety, and other psychiatric conditions makes her
                the ideal choice for patients seeking personalized mental health
                care and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-5">
                <button className="bg-orange-700 text-white text-base font-semibold px-2 sm:px-6 py-4 mt-4 flex-1 sm:flex-none">
                  FIND OUT MORE
                </button>
                <button className="bg-orange-900 text-white text-base font-semibold px-2 sm:px-6 py-4 mt-4 flex-1 sm:flex-none">
                  CONTACT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>test</div>
    </main>
  );
}
