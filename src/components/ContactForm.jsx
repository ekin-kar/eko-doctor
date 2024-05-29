import Image from "next/image";
import hero2 from "/public/hero2.jpg";
import book from "/public/book.jpg";
import Seperator from "./Seperator";
import Header1 from "./Header1";
import Header2 from "./Header2";
import Paragraph from "./Paragraph";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-stretch h-auto md:h-first-content w-full">
      <div className="relative h-60 md:h-full w-full md:flex-1">
        <Image
          src={book}
          alt="Picture of the author"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <div className="flex flex-col justify-center items-center h-auto md:h-full w-full md:flex-1 bg-second-color text-white p-6">
        <div className="max-w-full md:max-w-lg lg:max-w-4xl w-full">
          <Header2>Come & visit us!</Header2>
          <Seperator />
          <Header1>Dr. Ekin Kar</Header1>
          <Paragraph>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic magni
            eveniet distinctio, nobis omnis porro itaque dolor.
          </Paragraph>
          <div className="flex flex-col gap-5 mt-2">
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="name">
                Name:
              </label>
              <input
                className="text-black w-full md:w-1/2 h-10 rounded-md"
                type="text"
                id="name"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="email">
                Email:
              </label>
              <input
                className="text-black w-full md:w-1/2 h-10 rounded-md"
                type="email"
                id="email"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="date">
                Date:
              </label>
              <input
                className="text-black w-full md:w-1/2 h-10 rounded-md"
                type="datetime-local"
                id="date"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-semibold" htmlFor="message">
                Message:
              </label>
              <textarea
                className="text-black w-full md:w-1/2 h-32 rounded-md resize-none"
                id="message"
              />
            </div>
            <button className="bg-first-color hover:bg-orange-950 text-white text-sm font-semibold px-4 sm:px-12 py-4 mt-4 transition-colors duration-500 w-full md:w-1/2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
