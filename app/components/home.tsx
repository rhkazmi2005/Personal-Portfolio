"use client";
import React from "react";

import { motion } from "motion/react";
import { FlipWords } from "@/components/ui/flip-words";
import { Vortex } from "@/components/ui/vortex";



const Home = () => {
  return (
    <div className="relative min-h-screen">
      <Vortex
        backgroundColor="#000000"
        particleCount={700}
        baseHue={0}
        rangeHue={10}
        className="flex items-center justify-center min-h-screen"
        containerClassName="absolute inset-0"
      >
        <div className="relative z-10 w-full py-12 px-4 sm:px-6 lg:px-8">
          <section id="home" className="w-full">
            <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center gap-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-white"
              >
                <span>Hi, I&apos;m Reza, a </span>
                <FlipWords
                  words={["Student", "Developer", "Technologist", "Specialist", "Analyst"]}
                  duration={2000}
                  className="text-red-500"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 justify-center"
              >
                <a
                  href="#projects"
                  className="px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-full shadow-lg hover:shadow-red-500/30 hover:scale-105 transition-all duration-300"
                >
                  View My Work
                </a>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-3 bg-transparent border-2 border-red-500 text-white font-semibold rounded-full hover:bg-red-500/10 hover:scale-105 transition-all duration-300"
                >
                  Resume
                </a>
              </motion.div>
            </div>
          </section>
        </div>
      </Vortex>
    </div>
  );
};

export default Home;
