import Image from "next/image";

const About = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex flex-col lg:flex-row items-center gap-20">
        {/* Text Block */}
        <div className="lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl font-semibold mb-4 text-gray-900">
            About Us
          </h2>
          <p className="text-gray-600 mb-6">
            Situated at the hub of Gulshan Avenue, Men’z Crown Premium Salon &
            Spa started its journey 12 years ago. It is the go-to place for all
            styling and grooming needs. Recently, we opened a branch in New
            Mexico, extending our network from Mexico to Maine.
          </p>
          <p className="text-gray-600 mb-6">
            We import authentic products from Singapore and Dubai to ensure that
            your styling remains uncompromised. Our extensive services empower
            our customers to maintain their individuality when choosing from a
            variety of options. Additionally, we cater to foreign clients,
            diplomats, and ex-pats with premium styling and grooming services.
          </p>
          <a
            href="#"
            className="inline-block bg-gray-900 text-white px-6 py-2 rounded hover:bg-gray-700 transition-colors"
          >
            Read More →
          </a>
        </div>

        {/* Image Block */}
        <div className="lg:w-1/2 relative flex justify-center ">
          {/* Large Image */}
          <div className="w-3/4 h-96 rounded-lg overflow-hidden shadow-lg hidden md:block">
            <Image
              src="/images/hero-2.jpg" // Replace with your image path
              alt="Profile Picture"
              layout="fill"
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
