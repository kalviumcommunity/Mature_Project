// components/About.jsx
import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="snap-start relative py-32 px-6 bg-black text-white">
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-0"
      >
        <source src="/background-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center relative z-10"
      >
        <h2 className="text-4xl font-bold text-indigo-400 mb-4">About Me</h2>
        <p className="text-lg leading-relaxed">
          I'm Pranav Sharma, a passionate Computer Science Engineering student with a deep interest in modern web development and cloud technologies. I enjoy building full-stack applications using tools like React, Node.js, and MongoDB, and I’m also diving into DevOps, Oracle Fusion, and MuleSoft. My goal is to create scalable, user-focused applications that make a real impact.
        </p>
        <p className="text-md text-indigo-300 mt-4">
          When I'm not coding, I’m learning about the latest tech trends, contributing to open-source, or experimenting with UI/UX designs to create seamless digital experiences.
        </p>

        <div className="flex justify-center gap-8 mt-16">
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-center text-white font-semibold shadow-lg"
          >
            React.js
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-green-400 to-blue-500 flex items-center justify-center text-center text-white font-semibold shadow-lg"
          >
            Node.js
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-32 h-32 rounded-full bg-gradient-to-tr from-yellow-400 to-orange-500 flex items-center justify-center text-center text-white font-semibold shadow-lg"
          >
            DevOps
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;