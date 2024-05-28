const Header1 = ({ children }) => {
  return (
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold min-w-[300px] sm:min-w-[400px] md:min-w-[500px] lg:min-w-[600px]">
      {children}
    </h1>
  );
};

export default Header1;
