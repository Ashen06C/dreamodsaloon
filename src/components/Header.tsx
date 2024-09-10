"use client";
import { useState, useEffect } from "react";
import Link from "next/link";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Scroll direction detection
  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY && currentScrollY > 100) {
      // Hide the header when scrolling down and beyond 100px from the top
      setShowHeader(false);
    } else {
      // Show the header when scrolling up
      setShowHeader(true);
    }

    setLastScrollY(currentScrollY);
  };

  // Add scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full fixed z-50 mt-6 px-5 md:px-20 transition-transform duration-300 ${
        showHeader ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-60 rounded-lg text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          {/* Hamburger Menu for Mobile */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu} className="focus:outline-none">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={
                    isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"
                  }
                ></path>
              </svg>
            </button>
          </div>

          {/* Logo */}
          <div className="text-xl md:text-4xl font-bold">
            <span className="text-orange-300">Dreamod Saloon</span>
          </div>

          {/* Links for larger screens */}
          <nav className="hidden lg:flex space-x-6">
            <Link href="/#" className="hover:text-orange-300">
              Home
            </Link>
            <Link href="/#about" className="hover:text-orange-300">
              About Us
            </Link>
            <Link href="/#service" className="hover:text-orange-300">
              Services
            </Link>
            <Link href="/#team" className="hover:text-orange-300">
              Our Team
            </Link>
            <Link href="/#gallery" className="hover:text-orange-300">
              Gallery
            </Link>
            <Link href="/#contact" className="hover:text-orange-300">
              Contact
            </Link>
          </nav>

          {/* "Book Now" Button for all screen sizes */}
          <div className="bg-orange-300 px-4 py-2 rounded-md text-white hidden md:block hover:scale-105 hover:shadow-lg transition-transform duration-300">
            Book Now
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden mt-4 space-y-4 p-4 rounded text-left w-fit">
            <Link
              href="/#"
              onClick={toggleMenu}
              className="hover:text-orange-300 block"
            >
              Home
            </Link>
            <Link
              href="/#about"
              onClick={toggleMenu}
              className="hover:text-orange-300 block"
            >
              About Us
            </Link>
            <Link
              href="/#service"
              onClick={toggleMenu}
              className="hover:text-orange-300 block"
            >
              Services
            </Link>
            <Link
              href="/#team"
              onClick={toggleMenu}
              className="hover:text-orange-300 block"
            >
              Our Team
            </Link>
            <Link
              href="/#gallery"
              onClick={toggleMenu}
              className="hover:text-orange-300 block"
            >
              Gallery
            </Link>
            <Link
              href="/#contact"
              onClick={toggleMenu}
              className="hover:text-orange-300 block"
            >
              Contact
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
