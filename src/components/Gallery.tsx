"use client";
import React, { useState } from "react";

const Gallery = () => {
  const images = [
    { src: "/images/hero-2.jpg", alt: "Image 1" },
    { src: "/images/hero-3.jpg", alt: "Image 2" },
    { src: "/images/chairs.jpg", alt: "Image 3" },
    { src: "/images/haircut.jpg", alt: "Image 4" },
    { src: "/images/hairstyles.jpg", alt: "Image 5" },
    { src: "/images/logo.jpg", alt: "Image 6" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Handle the next and previous buttons
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Get the next and current images for larger screens
  const nextImageIndex = (currentIndex + 1) % images.length;

  return (
    <div className="container mx-auto mb-4  py-8 px-5 bg-gray-900 rounded-2xl">
      <h2 className="text-center text-4xl text-orange-300 font-semibold mb-8">
        Our Gallery
      </h2>

      <div className="relative">
        {/* For smaller screens: Show one image at a time */}
        <div className="block sm:hidden">
          <div className="overflow-hidden rounded-lg h-72">
            {" "}
            {/* Set a fixed height */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-4">
            <button
              onClick={prevImage}
              className="bg-orange-300 px-4 py-2 rounded-md text-white hover:scale-105 transition-transform"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="bg-orange-300 px-4 py-2 rounded-md text-white hover:scale-105 transition-transform"
            >
              Next
            </button>
          </div>
        </div>

        {/* For larger screens: Show two images side by side */}
        <div className="hidden sm:grid sm:grid-cols-2 gap-4">
          <div className="overflow-hidden rounded-lg h-80">
            {" "}
            {/* Set a fixed height */}
            <img
              src={images[currentIndex].src}
              alt={images[currentIndex].alt}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>
          <div className="overflow-hidden rounded-lg h-80">
            {" "}
            {/* Set a fixed height */}
            <img
              src={images[nextImageIndex].src}
              alt={images[nextImageIndex].alt}
              className="w-full h-full object-cover transition-transform duration-300"
            />
          </div>

          {/* Navigation Buttons */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-between px-4">
            <button
              onClick={prevImage}
              className="bg-orange-300 px-4 py-2 rounded-md text-white hover:scale-105 transition-transform"
            >
              Previous
            </button>
            <button
              onClick={nextImage}
              className="bg-orange-300 px-4 py-2 rounded-md text-white hover:scale-105 transition-transform"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
