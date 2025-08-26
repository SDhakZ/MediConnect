import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  const [hasShadow, setHasShadow] = useState(false);
  const [shrink, setHasShrink] = useState(false);

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const closeTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    clearTimeout(closeTimeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 300); // You can adjust delay here
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setHasShadow(scrollY > 0);
      setHasShrink(scrollY > 50);
      localStorage.setItem("scrollY", scrollY.toString());
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`${
        hasShadow ? "shadow-md" : ""
      } z-[999] px-6 sticky top-0 bg-white w-full border-gray-200 `}
    >
      <div
        className={`flex flex-wrap items-center justify-between max-w-screen-2xl ${
          shrink ? "py-4" : "py-7"
        } mx-auto transition-all duration-300`}
      >
        <a href="/" className="flex items-center">
          <span className="self-center text-2xl font-semibold whitespace-nowrap">
            MediConnect Pokhara
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center justify-center w-10 h-10 p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="flex flex-col items-center p-4 mt-4 text-sm font-medium border border-gray-100 rounded-lg md:p-0 bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
            {/* <li className="py-2">
              <a
                href="/services"
                className={`block px-3 h-full py-2 rounded-sm ${
                  location.pathname === "/services"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800 hover:text-green-800"
                }`}
              >
                Our Services
              </a>
            </li> */}
            <li
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
              className="relative h-full group"
            >
              <a
                className={`block px-3 py-2 rounded-sm  cursor-pointer ${
                  location.pathname.startsWith("/program-sectors")
                    ? "text-green-800 font-semibold"
                    : "text-gray-800 hover:text-green-800"
                }`}
              >
                Program Pillars
              </a>

              {isDropdownOpen && (
                <ul className="absolute left-0 z-50 w-64 mt-2 bg-white border rounded-md shadow-lg top-full">
                  <li>
                    <a
                      href="/program-sectors/hospitals"
                      className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hospitals & Health Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="/program-sectors/hotels"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Hotels & Hospitality
                    </a>
                  </li>
                  <li>
                    <a
                      href="/program-sectors/wellness"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Wellness & Healing Centres
                    </a>
                  </li>
                  <li>
                    <a
                      href="/program-sectors/adventure"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Adventure Tourism
                    </a>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <a
                href="/about-us"
                className={`block px-3 py-2 rounded-sm  ${
                  location.pathname === "/about-us"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800 hover:text-green-800"
                }`}
              >
                About Us
              </a>
            </li>
            <li>
              <a
                href="/contact"
                className={`block px-3 py-2 rounded-sm ${
                  location.pathname === "/contact"
                    ? "text-green-800 font-semibold"
                    : "text-gray-800 hover:text-green-800"
                }`}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
