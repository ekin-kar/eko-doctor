const Paragraph = ({ children }) => {
  return (
    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mt-4 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]">
      {children}
    </p>
  );
};

export default Paragraph;
