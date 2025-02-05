"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [exploreHovered, setExploreHovered] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-gradient-to-br from-gray-900 via-black to-purple-900 backdrop-blur-lg shadow-lg p-6 flex justify-between items-center z-50">
      <div className="flex items-center">
        {/* Website Name with Symbol */}
        <h1 className="text-2xl font-bold text-white mr-4">
          🌏 FlyAwayNow
        </h1>
      </div>
      <div className="flex items-center">
        {/* Navigation Links */}
        <Link href="/" className="mx-4 text-white hover:underline">Home</Link>
        <Link href="/search" className="mx-4 text-white hover:underline">Search</Link>

        {/* Dummy Login Button */}
        <button className="mx-4 text-white bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>

        {/* Language Dropdown */}
        <div className="relative mx-4">
          <select
            className="bg-gray-800 text-white px-4 py-2 rounded-lg"
            defaultValue="English"
          >
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Malayalam">Malayalam</option>
          </select>
        </div>

        {/* Dummy Explore Button with Hover Effect */}
        <button
          onMouseEnter={() => setExploreHovered(true)}
          onMouseLeave={() => setExploreHovered(false)}
          className="relative px-6 py-2 text-white bg-green-600 rounded-full transition duration-300"
        >
          Explore
          {exploreHovered && (
            <div className="absolute inset-0 border-2 border-white rounded-full transform scale-105 transition duration-300" />
          )}
        </button>
      </div>
    </nav>
  );
}
