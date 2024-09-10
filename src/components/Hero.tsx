
const Hero = () => {
  return (
    <div>
      <div
        className="relative bg-cover bg-center h-screen text-white flex flex-col items-center justify-center pt-12"
        style={{ backgroundImage: `url('/images/hero-1.jfif')` }}
      >
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative z-10 text-center">
          <h1 className="text-7xl font-serif">
            Let Your Hair <span className="text-orange-300">Mirror</span> Your
          </h1>
          <h1 className="text-7xl font-serif pb-4 ">Heart&#39:s Desire</h1>
          <div></div>
          <button className="mt-6 border py-2 px-6 rounded-md 0 text-white  hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
