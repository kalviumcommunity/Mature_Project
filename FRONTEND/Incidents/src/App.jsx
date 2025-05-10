import React from "react";
import Navbar from "./componenets/Navbar"
import Home from "./componenets/Home"
import About from "./componenets/Contact"
import Projects from "./componenets/Project"
import Contact from "./componenets/About"

function App() {
  return (
    <div className="font-sans text-gray-800 bg-gray-100 min-h-screen scroll-smooth">
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;