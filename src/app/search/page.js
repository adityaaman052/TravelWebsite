"use client"; // Ensure it's a client-side component
import { useRouter } from "next/navigation"; // Use Next.js navigation for client-side navigation
import { motion } from "framer-motion"; // Import framer-motion for animations

export default function SearchPage() {
  const router = useRouter(); // Router for navigation

  const handleOptionSelect = (option) => {
    router.push(`/search/${option}`); // Dynamically navigate to /search/flight, /search/car, etc.
  };

  return (
    <div className="bg-gradient-to-br from-gray-900 via-black to-purple-900 min-h-screen font-sans flex flex-col items-center justify-center py-20">
      {/* Animated heading */}
      <motion.h1
        className="text-white text-5xl font-semibold mb-12"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Select Your Service
      </motion.h1>

      {/* Service options - each with an image and a button */}
      <div className="flex justify-around w-full px-6">
        {/* Flight Booking Section */}
        <div className="text-center">
          <motion.img
            src="/flight-image.jpg" // Replace with your flight image
            alt="Flight Booking"
            className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          />
          <button
            onClick={() => handleOptionSelect("flight")}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Flight Booking ✈️
          </button>
        </div>

        {/* Car Rental Section */}
        <div className="text-center">
          <motion.img
         src="/assets/car1.jpg"   
         alt="Car Rental"
            className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          />
          <button
            onClick={() => handleOptionSelect("car")}
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Car Rental 🚗
          </button>
        </div>

        {/* Hotel Booking Section */}
        <div className="text-center">
          <motion.img
            src="/hotel-image.jpg" // Replace with your hotel image
            alt="Hotel Booking"
            className="mx-auto mb-4 w-48 h-48 object-cover rounded-lg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
          />
          <button
            onClick={() => handleOptionSelect("hotel")}
            className="bg-orange-600 text-white px-6 py-3 rounded-lg hover:bg-orange-700 transition"
          >
            Hotel Booking 🏨
          </button>
        </div>
      </div>
    </div>
  );
}
