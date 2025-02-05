"use client";

import { useState } from "react";
// import hotelImage from "../styles/hotel1.jpg"; // Adjust the path as needed

export default function HotelForm() {
  const [selectedHotel, setSelectedHotel] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [roomType, setRoomType] = useState("Single");
  const [hotels, setHotels] = useState(["The Grand Hotel", "Ocean View Resort", "Mountain Escape", "City Lights Inn"]);
  const [processOutput, setProcessOutput] = useState(null);

  const runProcess = () => {
    window.location.href = "http://example.com?hotel=selected_hotel&dates=selected_dates";
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen font-sans flex flex-col items-center justify-center py-20">
      {/* Banner Image */}
      <div className="w-full h-60 bg-cover bg-center" style={{ backgroundImage: "#" }}>
        <div className="w-full h-full bg-black opacity-50 flex justify-center items-center">
          <h1 className="text-white text-4xl font-semibold">Book Your Stay 🏨</h1>
        </div>
      </div>

      {/* Hotel Booking Form */}
      <div className="mt-8 w-full max-w-4xl mx-auto text-white p-8 rounded-lg bg-gray-800 shadow-lg">
        <h2 className="text-2xl font-bold mb-4 text-center">Hotel Booking 🏩</h2>
        <form className="space-y-6">
          <div className="mb-6">
            <label htmlFor="hotel-location" className="block text-sm font-semibold">Hotel:</label>
            <select
              id="hotel-location"
              value={selectedHotel}
              onChange={(e) => setSelectedHotel(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="">Select a hotel 🏨</option>
              {hotels.map((hotel, index) => (
                <option key={index} value={hotel}>{hotel} 🌟</option>
              ))}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="check-in-date" className="block text-sm font-semibold">Check-in Date 📅:</label>
            <input
              type="date"
              id="check-in-date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="check-out-date" className="block text-sm font-semibold">Check-out Date 📅:</label>
            <input
              type="date"
              id="check-out-date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="room-type" className="block text-sm font-semibold">Room Type 🛏️:</label>
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-full p-4 border rounded-lg bg-gray-700 text-white"
            >
              <option value="Single">Single</option>
              <option value="Double">Double</option>
              <option value="Suite">Suite</option>
            </select>
          </div>

          {/* Button */}
          <button
            type="button"
            onClick={runProcess}
            className="w-full px-6 py-3 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
          >
            Book Hotel 🏨
          </button>
        </form>

        {/* Process Output */}
        {processOutput && (
          <div className="mt-6 p-6 bg-green-100 rounded-lg text-black">
            <h3 className="font-semibold text-lg">Booking Confirmation 📜:</h3>
            <pre className="text-sm">{processOutput}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
