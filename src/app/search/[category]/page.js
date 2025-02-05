"use client";

import { useState, useEffect } from "react";
import { use } from "react"; // Import the use function from React to unwrap promises
import CarRentalForm from "@/components/CarRentalForm";
import HotelForm from "@/components/HotelForm";
import FlightForm from "@/components/FlightForm";

export default function SearchCategoryPage({ params }) {
  const { category } = use(params); // Unwrap the promise using React.use()

  const [selectedOption, setSelectedOption] = useState("");

  useEffect(() => {
    if (category) {
      setSelectedOption(category); // Update the selected option when category changes
    }
  }, [category]);

  const renderForm = () => {
    switch (selectedOption) {
      case "car":
        return <CarRentalForm />;
      case "hotel":
        return <HotelForm />;
      case "flight":
        return <FlightForm />;
      default:
        return <div>Please select a valid option.</div>;
    }
  };

  return (
    <div className="h-screen bg-black mt-44">
      {/* Hero Section */}
      <div className="text-center">
        <h1 className="text-5xl font-extrabold ">Book Your Dream Trip</h1>
        <p className="text-lg font-light mt-6">
          Choose your desired service below and book in minutes.
        </p>
        <button
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-full transition-all duration-300"
        >
          Explore Options
        </button>
      </div>

      {/* Category Selector */}
      <div className="text-center ">
        <h2 className="text-4xl font-semibold mb-4 mt-6">Choose a Category</h2>
        <div className="flex space-x-4 justify-center mt-6">
          <button
            onClick={() => setSelectedOption("car")}
            className="bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300 "
          >
            Car Rentals
          </button>
          <button
            onClick={() => setSelectedOption("hotel")}
            className="bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300"
          >
            Hotels
          </button>
          <button
            onClick={() => setSelectedOption("flight")}
            className="bg-white text-blue-500 py-3 px-6 rounded-lg shadow-md hover:bg-blue-100 transition-all duration-300"
          >
            Flights
          </button>
        </div>
      </div>

      {/* Render the appropriate form based on the selected category */}
      {renderForm()}
    </div>
  );
}
