"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FlightForm from "@/components/FlightForm";
import CarRentalForm from "@/components/CarRentalForm";
import HotelForm from "@/components/HotelForm";

export default function SearchForm() {
  const [selectedOption, setSelectedOption] = useState(null);
  const router = useRouter();

  // Function to handle button click and change the URL
  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    router.push(`/search/${option}`); // Update the URL based on the selection
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-6">
        <button
          onClick={() => handleOptionSelect("flight")}
          className="bg-blue-600 text-white px-6 py-3 mx-2 rounded-lg hover:bg-blue-700 transition"
        >
          Flight Booking
        </button>
        <button
          onClick={() => handleOptionSelect("car")}
          className="bg-green-600 text-white px-6 py-3 mx-2 rounded-lg hover:bg-green-700 transition"
        >
          Car Rental
        </button>
        <button
          onClick={() => handleOptionSelect("hotel")}
          className="bg-orange-600 text-white px-6 py-3 mx-2 rounded-lg hover:bg-orange-700 transition"
        >
          Hotel Booking
        </button>
      </div>

      {/* Render the relevant form based on selected option */}
      {selectedOption === "flight" && <FlightForm />}
      {selectedOption === "car" && <CarRentalForm />}
      {selectedOption === "hotel" && <HotelForm />}
    </div>
  );
}
