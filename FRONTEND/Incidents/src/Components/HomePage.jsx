import { motion } from "framer-motion";
import { Link } from "react-router-dom";


export default function HomePage() {
  return (
    <div className="w-full min-h-screen flex flex-col">
      {/* Navbar */}
      <nav className="w-full flex justify-between items-center py-4 px-8 bg-white shadow-md">
        <div className="text-2xl font-bold">Incidents</div>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">Home</button>
          <button className="text-gray-600 hover:text-black">About</button>
          <button className="text-gray-600 hover:text-black">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="flex flex-col justify-center items-center flex-grow bg-gray-100 text-center p-6">
        <motion.h1
          className="text-4xl font-bold text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to INCIDENTS
        </motion.h1>
        <p className="text-lg text-gray-600 mt-2">
          Share your stories...
        </p>

        <div className="mt-6">
          <Link to="/Sign-up">
            <motion.button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg text-lg font-medium shadow-md hover:bg-blue-600"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-4 bg-gray-800 text-white text-center text-sm">
        <p>&copy; 2025 Incidents. All rights reserved.</p>
      </footer>
    </div>
  );
}
