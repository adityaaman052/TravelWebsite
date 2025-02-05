"use client";

import { useState, useEffect } from "react";
// import carImage from "../styles/car1.jpg"; // Adjust the path as needed
import locationsData from "../data/locations.json"; // Adjust the path as needed

export default function CarRentalForm() {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [locations, setLocations] = useState([]);

  // Load car rental locations from JSON file
  useEffect(() => {
    if (locationsData.cars) {
      setLocations(locationsData.cars);
    }
  }, []);

  const rentCar = () => {
    window.location.href = "http://example.com?pickup=" + pickupLocation + "&dropoff=" + dropoffLocation;
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-blue-900 min-h-screen font-sans flex flex-col items-center justify-center py-20">
      {/* Banner Image */}
      <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "#" }}>
        <div className="w-full h-full bg-black opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">Rent a Car 🚗</h1>
        </div>
      </div>

      {/* Car Rental Form */}
      <div className="mt-8 w-full max-w-4xl mx-auto text-white p-8 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Car Rental 🚘</h2>
        <form className="space-y-6">
          <div className="mb-6">
            <label htmlFor="pickup-location" className="block text-sm font-semibold">Pick-up Location:</label>
            <select
              id="pickup-location"
              value={pickupLocation}
              onChange={(e) => setPickupLocation(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="">Select a pick-up location 📍</option>
              {locations.map((location, index) => (
                <option key={index} value={location}>
                  {location} 🚗
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="dropoff-location" className="block text-sm font-semibold">Drop-off Location:</label>
            <select
              id="dropoff-location"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="">Select a drop-off location 📍</option>
              {locations
                .filter(location => location !== pickupLocation) // Prevent selecting the same location
                .map((location, index) => (
                  <option key={index} value={location}>
                    {location} 🚘
                  </option>
                ))}
            </select>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={rentCar}
            className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Rent Car 🚗
          </button>
        </form>
      </div>
    </div>
  );
}
