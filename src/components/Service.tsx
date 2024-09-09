// components/Services.js
import Image from "next/image";

const Service = () => {
  return (
    <section className="sm:py-10 py-6 bg-gray-50">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 text-center">
        {/* Title */}
        <h2 className="text-3xl mb-4 font-semibold text-gray-900">
          Our Services
        </h2>

        <div className="flex flex-col lg:flex-row items-baseline justify-between space-y-8 lg:space-y-0 lg:space-x-8">
          {/* Left Column: Services */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start">
              <div className="w-24 h-24">
                <Image
                  src="/images/haircut.jpg"
                  width={48}
                  height={48}
                  alt="Haircut"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Hair cuts</h4>
                <p className="text-gray-600">
                  Step into the salon chair and let your worries disappear as
                  you transform your look with a fresh new haircut.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-24 h-24">
                <Image
                  src="/images/hairstyles.png"
                  width={48}
                  height={48}
                  alt="Facials"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Facials</h4>
                <p className="text-gray-600">
                  Pamper yourself with a luxurious facial and give your skin the
                  care it deserves, leaving you with a radiant, refreshed
                  complexion.
                </p>
              </div>
            </div>
          </div>

          {/* Center Image */}
          {/* <div className="lg:w-1/3 relative">
            <div className="rounded-xl overflow-hidden shadow-lg ">
              <Image
                src="/images/chairs.jpg" // Replace with your image path
                width={256}
                height={256}
                layout="responsive"
                alt="Barber"
                objectFit="cover"
              />
            </div>
          </div> */}

          <div className="text-4xl  border-2 rounded-2xl p-3 hover:scale-105 hover:shadow-lg transition-transform duration-300">
            <h1 className="pb-4 text-orange-300 uppercase">Dreamod</h1>
            <p className="text-3xl text-gray-900 text-center">
              Where Men Find Their Signature Look
            </p>
          </div>
          {/* Right Column: Services */}
          <div className="lg:w-1/3 space-y-8">
            <div className="flex items-start space-x-4">
              <div className="w-24 h-24">
                <Image
                  src="/images/haircut.jpg"
                  width={48}
                  height={48}
                  alt="Shaving"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Shaving</h4>
                <p className="text-gray-600">
                  A close shave can make all the difference, leaving you feeling
                  refreshed ready to tackle whatever the day brings.
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-24 h-24">
                <Image
                  src="/images/hairstyles.png"
                  width={48}
                  height={48}
                  alt="Spa"
                />
              </div>
              <div>
                <h4 className="text-lg font-bold text-gray-800">Hair Styles</h4>
                <p className="text-gray-600">
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
