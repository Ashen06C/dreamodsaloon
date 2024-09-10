import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          {/* Left section - Logo and Social Media Icons */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
            <h1 className="text-orange-300 uppercase font-semibold mb-4">
              Dreamod Saloon
            </h1>
            <img
              src="/images/logo.png"
              alt="Dreamod Salon Logo"
              className="mx-auto lg:mx-0 w-32 mb-4"
            />
          </div>

          {/* Middle section - Quick Links */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-orange-300 uppercase font-semibold mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2 ">
              <li className="hover:text-orange-300">
                <a href="#" className="uppercase">
                  Home
                </a>
              </li>
              <li className="hover:text-orange-300">
                <a href="#" className="uppercase">
                  About Us
                </a>
              </li>
              <li className="hover:text-orange-300">
                <a href="#" className="uppercase">
                  Terms & Conditions
                </a>
              </li>
              <li className="hover:text-orange-300">
                <a href="#" className="">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>

          {/* Right section - Contact Info */}
          <div className="w-full lg:w-1/4 mb-6 lg:mb-0 text-center lg:text-left">
            <h3 className="text-orange-300 uppercase font-semibold mb-4">
              CONTACT US
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-center lg:justify-start">
                <FaClock className="mr-2" />
                <span>Tuesday - Sunday: 10:00am - 7:00pm</span>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaMapMarkerAlt className="mr-2" />
                <a href="">
                  <span>Hettimulla, Kegalle, Sri Lanka</span>
                </a>
              </li>
              <li className="flex items-center justify-center lg:justify-start">
                <FaPhoneAlt className="mr-2" />
                <a href="#">
                  <span>+94 71 744 7081</span>
                </a>
              </li>
            </ul>
            <div className="flex justify-center lg:justify-start space-x-4 mt-8">
              <a href="#" aria-label="Facebook" className="text-white text-2xl">
                <FaFacebook />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white text-2xl"
              >
                <FaInstagram />
              </a>
              <a href="#" aria-label="TikTok" className="text-white text-2xl">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>

        {/* Footer bottom text */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p>
            © 2024 All Rights Reserved <span className="text-orange-300">@Dreamod Salon</span> | Designed &
            Developed by Ashen06C
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
