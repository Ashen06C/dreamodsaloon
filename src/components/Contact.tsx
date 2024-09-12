import {
  FaEnvelope,
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  return (
    <section className="bg-white py-12 ">
      <div className="container mx-auto px-8">
        <div className="flex flex-wrap -mx-4">
          {/* Get In Touch Section */}
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Get in Touch
            </h2>
            <p className="mb-6 font-semibold text-gray-900">
              Start Your Journey to Beautiful Hair Today. Contact Us for Expert
              Hair Care and Personalized Services.
            </p>
            <ul className="text-gray-900 font-semibold ">
              {/* Location */}
              <li className="mb-4 flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                <span>Hettimulla, Kegalle, Sri Lanka</span>
              </li>

              {/* Opening hours */}
              <li className="mb-4 flex items-center">
                <FaClock className="mr-2" />
                <span>10.00 AM – 07.00 PM Tuesday – Sunday</span>
              </li>

              {/* Phone numbers */}
              <li className="mb-4 flex items-center">
                <FaPhoneAlt className="mr-2" />
                <div>
                  <a href="tel:+94717447081" className="hover:text-gray-700">
                    +94 71 744 7081
                  </a>
                  <span className="ml-4">
                    <a href="tel:+94773885122" className="hover:text-gray-700">
                      +94 77 388 5122
                    </a>
                  </span>
                </div>
              </li>

              {/* Email */}
              <li className="mb-4 flex items-center">
                <FaEnvelope className="mr-2" />
                <a
                  href="mailto:salondreamod@gmail.com"
                  className="hover:text-gray-700"
                >
                  salondreamod@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Send A Message Section */}
          <div className="w-full md:w-1/2 px-4">
            <h2 className="text-3xl font-semibold mb-4 text-gray-900">
              Send a Message
            </h2>
            <p className="mb-6 font-semibold text-gray-900">
              Reach Out to Us for Expert Hair Care and Personalized Services.
              Your Journey to Beautiful Hair Starts Here.
            </p>
            <form className="space-y-4">
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="text"
                  placeholder="Your name*"
                  className="w-full mb-4 md:mb-0 border border-gray-300 p-2 rounded-md text-black"
                  required
                />
                <input
                  type="tel"
                  placeholder="Your contact No.*"
                  className="w-full border border-gray-300 p-2 rounded-md text-black"
                  required
                />
              </div>
              <div className="flex flex-col md:flex-row md:space-x-4">
                <input
                  type="email"
                  placeholder="Your email*"
                  className="w-full mb-4 md:mb-0 border border-gray-300 p-2 rounded-md text-black"
                  required
                />
              </div>
              <textarea
                placeholder="Your message*"
                className="w-full border border-gray-300 p-2 rounded-md text-black"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-gray-900 text-white p-3 pb-4 rounded-md w-full hover:scale-105 hover:shadow-lg transition-transform duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-6 py-8 sm:py-10 ">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.2624896245147!2d80.35906497405065!3d7.210867814796148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae311969ff5e13b%3A0x2dbf3245d0648708!2sDreamod%20saloon!5e0!3m2!1sen!2slk!4v1725942376259!5m2!1sen!2slk"
          className="p-4 w-full max-w-full md:w-3/4 lg:w-1/2 h-64 md:h-96 border-2 border-gray-900 rounded-lg"
          loading="lazy"
        ></iframe>
      </div>
    </section>
  );
};

export default Contact;
