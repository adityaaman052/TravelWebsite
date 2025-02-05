"use client";
import { useState } from "react";
import flightImage from "../styles/flight1.jpg"; // Adjust the path as needed
import FlightDealCard from "./FlightDealCard"; // Import the FlightDealCard component

export default function FlightForm() {
  const [source, setSource] = useState("");
  const [destination, setDestination] = useState("");
  const [numPassengers, setNumPassengers] = useState(1);
  const [classType, setClassType] = useState("Economy");
  const [flights, setFlights] = useState([]);
  const [processOutput, setProcessOutput] = useState(null);

  // Load flight locations (mock data for this example)
  const locationsData = {
    flights: ["New York", "London", "Tokyo", "Paris", "Berlin"]
  };

  useState(() => {
    if (locationsData.flights) {
      setFlights(locationsData.flights); // Populate the flights state with data
    }
  }, []);

  // Function to call the API route
//   const runProcess = async () => {
//     try {
//       const response = await fetch("/api/runProcess", {
//         method: "POST",
//       });
//       const data = await response.json();

//       if (response.ok) {
//         setProcessOutput(data.output);
//       } else {
//         console.error("Error:", data.message);
//       }
//     } catch (error) {
//       console.error("Failed to call API:", error);
//     }
//   };
const runProcess = () => {
    window.location.href = "http://example.com?destination=selected_destination&dates=selected_dates";
  };
  

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen font-sans flex flex-col items-center justify-center py-20">
      {/* Banner Image */}
      <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: `url(${flightImage})` }}>
        <div className="w-full h-full bg-black opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">Book Your Flight ✈️</h1>
        </div>
      </div>

      {/* Flight Form */}
      <div className="mt-8 w-full max-w-4xl mx-auto text-white p-8 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Flight Booking 🛫</h2>
        <form className="space-y-6">
          <div className="mb-6">
            <label htmlFor="source-location" className="block text-sm font-semibold">Source:</label>
            <select
              id="source-location"
              value={source}
              onChange={(e) => setSource(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="">Select a source 🌍</option>
              {flights.map((flight, index) => (
                <option key={index} value={flight}>
                  {flight} 🏙️
                </option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="destination-location" className="block text-sm font-semibold">Destination:</label>
            <select
              id="destination-location"
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="">Select a destination 🌏</option>
              {flights
                .filter(flight => flight !== source) // Prevent selecting the same location
                .map((flight, index) => (
                  <option key={index} value={flight}>
                    {flight} ✈️
                  </option>
                ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="num-passengers" className="block text-sm font-semibold">Number of Passengers 👥:</label>
            <input
              type="number"
              id="num-passengers"
              value={numPassengers}
              onChange={(e) => setNumPassengers(e.target.value)}
              min="1"
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="class-type" className="block text-sm font-semibold">Class:</label>
            <select
              id="class-type"
              value={classType}
              onChange={(e) => setClassType(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="Economy">Economy</option>
              <option value="Business">Business</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={runProcess}
            className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Book Flight 🛫
          </button>
        </form>

        {/* Process Output */}
        {processOutput && (
          <div className="mt-6 p-6 bg-green-100 rounded-lg text-black">
            <h3 className="font-semibold text-lg">Process Output 📜:</h3>
            <pre className="text-sm">{processOutput}</pre>
          </div>
        )}
      </div>

      {/* Flight Deals Section */}
      <div className="mt-12 w-full max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <FlightDealCard
          title="Flight Deals from India 🇮🇳"
          image="https://via.placeholder.com/350x200?text=Flight+Deal+1"
          source="India"
          destination="London"
          flightDays={["Monday", "Thursday"]}
          price="$500"
        />
        <FlightDealCard
          title="Flight Deals from India 🇮🇳"
          image="https://via.placeholder.com/350x200?text=Flight+Deal+2"
          source="India"
          destination="Paris"
          flightDays={["Wednesday", "Saturday"]}
          price="$550"
        />
        <FlightDealCard
          title="Flight Deals from India 🇮🇳"
          image="https://via.placeholder.com/350x200?text=Flight+Deal+3"
          source="India"
          destination="Tokyo"
          flightDays={["Tuesday", "Friday"]}
          price="$600"
        />
      </div>
    </div>
  );
}
