import React from "react";
import { motion } from "framer-motion";

const projects = [
  { title: "Pet Identification App", color: "from-green-400 to-teal-500" },
  { title: "Incidents MERN Platform", color: "from-pink-400 to-purple-400" },
  { title: "Weather App in React", color: "from-yellow-400 to-orange-500" }
];

const Projects = () => {
  return (
    <section id="projects" className="snap-start py-24 px-6 bg-gradient-to-br from-gray-100 to-gray-200">
      <motion.h2
        className="text-4xl font-bold text-center text-indigo-800 mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        My Projects
      </motion.h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            className={`relative overflow-hidden rounded-2xl shadow-xl group`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.2 }}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${proj.color} opacity-80 transition-transform group-hover:scale-105`}></div>
            <div className="relative p-8 text-white">
              <h3 className="text-2xl font-semibold mb-2 drop-shadow-md">{proj.title}</h3>
              <p className="opacity-90">A brief description of what this project does and the tech stack used.</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
