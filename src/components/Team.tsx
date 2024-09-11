// pages/team.js
import { FaInstagram, FaFacebook } from "react-icons/fa";

const Team = () => {
  return (
    <div className="bg-white pb-5">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900">Our Team</h2>
        <h1 className="text-2xl font-bold text-orange-400 mt-2">
          Exclusive for Real Gentlemen
        </h1>
        <hr className="my-4 w-16 border-t-2 border-gray-900 mx-auto" />
      </div>

      <div className="flex flex-wrap justify-center mt-10 gap-5">
        {/* Card 1 */}
        <div className=" w-full md:w-1/3 p-4 max-w-xs">
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/hero-2.jpg" // Example image path, replace with actual image
              alt="Jane Cooper"
              className="w-full h-60 object-cover hover:scale-105 hover:shadow-lg transition-transform duration-300"
            />
            <div className="pt-4 pb-6 pl-4 pr-4 flex flex-col">
              <h3 className="text-md font-semibold">Chamara Madushanka</h3>
              <p className="text-sm text-orange-300">Hair Specialist</p>
              <div className="absolute space-y-2 right-4 ">
                <a href="#" className="block">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="block">
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 p-4 max-w-xs">
          <div className="relative bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg">
            <img
              src="/images/hero-3.jpg"
              alt="Robert Fox"
              className="w-full h-60 object-cover hover:scale-105 hover:shadow-lg transition-transform duration-300"
            />
            <div className="pt-4 pb-6 pl-4 pr-4 flex flex-col">
              <h3 className="text-md font-bold">Shaminda</h3>
              <p className="text-sm text-orange-300">Hair Specialist</p>
              <div className="absolute space-y-2 right-4 ">
                <a href="#" className="block">
                  <FaInstagram className="text-2xl" />
                </a>
                <a href="#" className="block">
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Team;
