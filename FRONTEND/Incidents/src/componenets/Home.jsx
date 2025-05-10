import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

const Home = () => {
  return (
    <section id="home" className="snap-start h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500 to-purple-600 text-white relative">
      <motion.div
        className="text-center p-6"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-6xl font-extrabold mb-6 drop-shadow-xl leading-tight">
          Hi, I'm <span className="text-yellow-300">Pranav Sharma</span>
        </h1>
        <div className="text-2xl mb-8 h-10">
          <TypeAnimation
            sequence={[
              "Aspiring Full Stack Developer",
              2000,
              "React | Node | MongoDB | Tailwind",
              2000,
              "DevOps | Oracle Fusion | MuleSoft",
              2000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="inline-block"
          />
        </div>
        <motion.a
          href="#projects"
          className="inline-block px-10 py-4 bg-yellow-300 text-indigo-800 font-bold rounded-full shadow-lg hover:bg-yellow-200 transition"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          View Projects
        </motion.a>
      </motion.div>
    </section>
  );
};

export default Home;
