import Image from "next/image";
import hero2 from "/public/hero2.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center w-full h-first-content bg-gray-100 p-6">
      <div className="flex flex-col md:flex-row items-center w-full max-w-6xl gap-16">
        <div className="w-full mb-4 md:mb-0">
          <Image
            src={hero2}
            alt="Doctor"
            className="rounded-lg"
            layout="responsive"
            width={500}
            height={500}
            objectFit="cover"
          />
        </div>
        <div className="w-full md:w-2/3 md:pl-6 text-center md:text-left">
          <h1 className="text-3xl font-bold text-second-color mb-4">
            About Dr. Ekin Kar
          </h1>
          <p className="text-gray-700 mb-4">
            Dr. Ekin Kar is a renowned specialist with years of experience in
            providing exceptional medical care. She has dedicated her career to
            improving the health and well-being of her patients through
            comprehensive and personalized treatment plans.
          </p>
          <p className="text-gray-700 mb-4">
            After graduating from a top medical school, Dr. Kar continued her
            training in prestigious hospitals and clinics, gaining extensive
            knowledge and expertise in her field. Her commitment to ongoing
            education ensures that she stays updated with the latest medical
            advancements and techniques.
          </p>
          <p className="text-gray-700 mb-4">
            Dr. Kar believes in a holistic approach to healthcare, focusing on
            the physical, emotional, and mental aspects of her patients&apos;
            health. She takes the time to understand each patient&apos;s unique
            needs and works collaboratively with them to achieve optimal health
            outcomes.
          </p>
          <p className="text-gray-700">
            Outside of her practice, Dr. Kar is an active member of various
            medical associations and contributes to research and community
            health initiatives. Her passion for medicine and dedication to her
            patients make her a trusted and respected physician in the
            community.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
