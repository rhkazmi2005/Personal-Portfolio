"use client";
import React from "react";

import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import TerminalLoader from "@/components/ui/terminal-loader";



const Home = () => {
  return (
  <HeroHighlight containerClassName="py-6 px-2 bg-black min-h-screen flex items-center justify-center">
      <section id="home" className="w-full">
        <div className="max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
          <div className="transform scale-[1.2] sm:scale-[1.5] md:scale-[1.8] lg:scale-[2.0]">
            <TerminalLoader 
              text="Hi, I'm Reza" 
              title="welcome.exe" 
            />
          </div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default Home;
