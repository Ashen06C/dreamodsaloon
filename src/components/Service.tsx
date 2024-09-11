import Image from "next/image";

const Service = () => {
  return (
    <section className="sm:py-10 py-6 bg-gray-50 ">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-3xl mb-4 font-semibold text-gray-900">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-baseline justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Column: Services */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start">
              <div className="w-24 h-24 hidden">
                <Image
                  src="/images/haircut.jpg"
                  width={48}
                  height={48}
                  alt="Haircut"
                />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-800">Hair cuts</h4>
                <p className="text-gray-600">
                  Step into the salon chair and let your worries disappear as
                  you transform your look with a fresh new haircut.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 hidden">
                <Image
                  src="/images/hairstyles.png"
                  width={48}
                  height={48}
                  alt="Facials"
                />
              </div>
              <div className="text-right">
                <h4 className="text-lg font-bold text-gray-800">Facials</h4>
                <p className="text-gray-600 ">
                  Pamper yourself with a luxurious facial and give your skin the
                  care it deserves, leaving you with a radiant, refreshed
                  complexion.
                </p>
              </div>
            </div>
          </div>
          <div className="text-4xl rounded-2xl hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <p className="text-3xl  text-orange-400 text-center animate-fadeInUp">
              Where Men Find Their Signature Look
            </p>
          </div>
          {/* Right Column: Services */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 hidden">
                <Image
                  src="/images/haircut.jpg"
                  width={48}
                  height={48}
                  alt="Shaving"
                />
              </div>
              <div className="text-right">
                <h4 className="text-lg font-bold text-gray-800">Shaving</h4>
                <p className="text-gray-600 ">
                  A close shave can make all the difference, leaving you feeling
                  refreshed ready to tackle whatever the day brings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-24 h-24 hidden">
                <Image
                  src="/images/hairstyles.png"
                  width={48}
                  height={48}
                  alt="Spa"
                />
              </div>
              <div className="text-left">
                <h4 className="text-lg font-bold text-gray-800">Hair Styles</h4>
                <p className="text-gray-600 ">
                  Escape from the hustle and bustle of everyday life and unwind
                  with a day at the spa, where relaxation awaits.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
