"use client"
import { useState, useEffect } from "react";

export default function Footer() {
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  // States for controlling the visibility of each dropdown
  const [openDropdown, setOpenDropdown] = useState(null);

  // Handle scroll event to make footer visible
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY + window.innerHeight >= document.documentElement.scrollHeight) {
        setIsFooterVisible(true);
      } else {
        setIsFooterVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle dropdown toggle, closing others when one is opened
  const toggleDropdown = (dropdown) => {
    if (openDropdown === dropdown) {
      setOpenDropdown(null); // Close the dropdown if it's already open
    } else {
      setOpenDropdown(dropdown); // Open the clicked dropdown
    }
  };

  return (
    <footer
      className={`fixed bottom-0 w-full bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-6 transition-all duration-300 ${
        isFooterVisible ? "opacity-100" : "opacity-0"
      } ${openDropdown ? "h-80" : "h-24"}`} // Increase footer size when any dropdown is open
    >
      <div className="flex justify-between items-center px-6">
        {/* Left Section - Links without Dropdown */}
        <div className="flex space-x-6">
          <a href="#" className="text-sm hover:underline">
          © FlyAwayNow Ltd @2025
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy Settings
          </a>
          
          <a href="#" className="text-sm hover:underline">
            Cookie policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Privacy policy
          </a>
          <a href="#" className="text-sm hover:underline">
            Terms of service
          </a>
          <a href="#" className="text-sm hover:underline">
            Company Details
          </a>
        </div>

        {/* Right Section - Links with Dropdown */}
        <div className="flex space-x-6">
          {/* Explore Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("explore")}
              className="text-sm flex items-center space-x-1 hover:underline"
            >
              <span>Explore</span>
              <span>&#9660;</span> {/* Simple downward arrow symbol */}
            </button>
            {openDropdown === "explore" && (
              <div className="absolute right-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-2 mt-2 w-36 rounded-lg">
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Destination 1
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Destination 2
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Destination 3
                </a>
              </div>
            )}
          </div>

          {/* Company Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("company")}
              className="text-sm flex items-center space-x-1 hover:underline"
            >
              <span>Company</span>
              <span>&#9660;</span> {/* Simple downward arrow symbol */}
            </button>
            {openDropdown === "company" && (
              <div className="absolute right-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-2 mt-2 w-36 rounded-lg">
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  About Us
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Careers
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Team
                </a>
              </div>
            )}
          </div>

          {/* Trips Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("trips")}
              className="text-sm flex items-center space-x-1 hover:underline"
            >
              <span>Trips</span>
              <span>&#9660;</span> {/* Simple downward arrow symbol */}
            </button>
            {openDropdown === "trips" && (
              <div className="absolute right-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-2 mt-2 w-36 rounded-lg">
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Trip 1
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Trip 2
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Trip 3
                </a>
              </div>
            )}
          </div>

          {/* Partners Dropdown */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("partners")}
              className="text-sm flex items-center space-x-1 hover:underline"
            >
              <span>Partners</span>
              <span>&#9660;</span> {/* Simple downward arrow symbol */}
            </button>
            {openDropdown === "partners" && (
              <div className="absolute right-0 bg-gradient-to-br from-gray-900 via-black to-purple-900 text-white py-2 mt-2 w-36 rounded-lg">
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Partner 1
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Partner 2
                </a>
                <a href="#" className="block text-sm px-4 py-2 hover:bg-opacity-30">
                  Partner 3
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
