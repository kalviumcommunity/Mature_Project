import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="snap-start py-24 px-6 bg-white">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="max-w-lg mx-auto"
      >
        <h2 className="text-4xl font-bold text-center text-indigo-600 mb-8">Get In Touch</h2>
        <form className="flex flex-col gap-4 bg-gray-50 p-6 rounded-xl shadow">
          <input
            type="text"
            placeholder="Name"
            className="p-3 border border-gray-300 rounded focus:border-indigo-500 outline-none transition"
          />
          <input
            type="email"
            placeholder="Email"
            className="p-3 border border-gray-300 rounded focus:border-indigo-500 outline-none transition"
          />
          <textarea
            placeholder="Message"
            rows="5"
            className="p-3 border border-gray-300 rounded focus:border-indigo-500 outline-none transition"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-4 px-6 py-3 bg-indigo-600 text-white font-medium rounded shadow hover:bg-indigo-700 transition"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default Contact;