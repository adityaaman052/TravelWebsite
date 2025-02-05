"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function HomePage() {
  const router = useRouter();

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-br from-gray-900 via-black to-purple-900">
      {/* Welcome to FlyAwayNow Section */}
      <motion.h1
        className="text-6xl font-bold mb-4 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ✈️ Welcome to FlyAwayNow 🚀
      </motion.h1>

      {/* Original Welcome Message */}
      <motion.h1
        className="text-5xl font-bold mb-6 text-white"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
       
      </motion.h1>
      <motion.p
        className="text-lg mb-6 max-w-lg text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Your one-stop solution for booking Flights, Hotels, and Car Rentals 🚗🏨.
      </motion.p>
      <motion.button
        className="bg-white text-blue-600 px-6 py-3 rounded-lg shadow-lg hover:scale-110 transition"
        onClick={() => router.push("/search")}
        whileHover={{ scale: 1.1 }}
      >
        Explore The World 🚀
      </motion.button>
    </div>
  );
}
