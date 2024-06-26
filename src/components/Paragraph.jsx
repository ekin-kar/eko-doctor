const Paragraph = ({ children, className }) => {
  return (
    <p
      className={`text-sm sm:text-base md:text-lg lg:text-xl mt-4 min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px] ${className}`}
    >
      {children}
    </p>
  );
};

export default Paragraph;
