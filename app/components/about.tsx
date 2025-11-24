"use client";

import React from "react";
import { motion } from "motion/react";
const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex items-center justify-center">
      <section id="about">
        <div className="max-w-6xl mx-auto bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              <span className="group inline-block px-8 py-3 rounded-full bg-[#232325]/80 border border-white/20 shadow-lg transition duration-300 hover:bg-[#232325]/60 cursor-pointer">
                <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-5xl md:text-6xl font-extrabold tracking-tight">
                  About Me
                </span>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              I study Computer Information Systems at the University of Houston. I focus on building reliable and efficient digital systems. I enjoy learning new tools, exploring new environments, and improving how systems work. I like challenging problems and I take a steady, thoughtful approach. I am looking for an internship where I support real projects, learn from experienced teams, and use my skills to improve technical operations.
            </p>
          </motion.div>

          {/* My Journey section removed as requested */}
        </div>
      </section>
    </div>
  );
};

export default About;
