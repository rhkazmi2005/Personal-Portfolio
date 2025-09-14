"use client";
import React from "react";

import { TypingAnimation } from "@/components/magicui/typing-animation";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";



const Home = () => {
  return (
  <HeroHighlight containerClassName="py-20 px-4 bg-black min-h-screen flex items-center justify-center">
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
            className="mt-6 text-white/80 text-lg md:text-xl max-w-2xl"
          >
            <Highlight className="bg-gradient-to-r from-red-500 to-red-700 text-white">Full-Stack Developer & UI/UX Enthusiast</Highlight>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 1 }}
            className="mt-4 text-white/60 text-sm md:text-base max-w-xl"
          >
            Crafting digital experiences with modern technologies
          </motion.div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default Home;
