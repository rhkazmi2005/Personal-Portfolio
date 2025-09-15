"use client";
import React from "react";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";



const Home = () => {
  return (
  <HeroHighlight containerClassName="py-6 px-2 bg-black min-h-screen flex items-center justify-center">
      <section id="home" className="w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <TypingAnimation
            style={{
              color: '#fff',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              background: 'transparent',
              textShadow: '0 0 20px rgba(220, 38, 38, 0.8)'
            }}
          >
            Hi, I'm Reza
          </TypingAnimation>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-6"
          >
            <span className="group inline-block px-8 py-3 rounded-full bg-[#232325]/80 border border-white/20 shadow-lg transition duration-300 hover:bg-[#232325]/60 cursor-pointer">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-lg md:text-xl font-extrabold tracking-tight">
                Full-Stack Developer & UI/UX Enthusiast
              </span>
            </span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-4 text-white text-sm md:text-base max-w-xl"
          >
            Crafting digital experiences with modern technologies
          </motion.div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default Home;
