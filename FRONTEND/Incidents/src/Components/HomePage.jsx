import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "./Css/Homepage.css";

export default function HomePage() {
  return (
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">
         Incidents
        </div>
        <div className="nav-links">
          <button className="nav-button">Home</button>
          <button className="nav-button">About</button>
          <button className="nav-button">Contact</button>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="hero">
        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Welcome to INCIDENTS
        </motion.h1>
        <p className="hero-text">
             Share Your storys...
        </p>

        <div>
          <Link to="/Sign-up">
            <motion.button
              className="hero-button"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Get Started
            </motion.button>
          </Link>
        </div>
      </main>
      {/* Footer */}
      <footer className="footer">
        <p>&copy; 2025 HomePage. All rights reserved.</p>
      </footer>
    </div>
  );
}
