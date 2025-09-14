"use client";

import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import React from "react";
import { motion } from "motion/react";

const About = () => {
  return (
  <HeroHighlight containerClassName="py-20 px-4 bg-gradient-to-b from-red-950 to-red-900 dark:from-black dark:to-gray-900 light:from-red-100 light:to-white">
      <section id="about">
  <div className="max-w-6xl mx-auto bg-transparent p-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
              <Highlight className="bg-gradient-to-r from-red-500 to-red-700 text-white text-5xl md:text-6xl font-extrabold">About Me</Highlight>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              I'm Reza, a Computer Information Systems student at the Univeristy of Houston with hands-on experience in 
              Python development, UI/UX design, and systems configuration, 
              seeking a 2025 IT Analyst/Cybersecurity internship. 
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-6">
                My Journey
              </h3>
              <div className="space-y-4 text-white">
                <p>
                  I started my coding journey with a curiosity about how websites work, 
                  and that curiosity has grown into a passion for building complex, 
                  scalable applications that solve real-world problems.
                </p>
                <p>
                  Over the years, I've worked with various technologies and frameworks, 
                  always staying up-to-date with the latest trends and best practices 
                  in web development.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new design trends, 
                  contributing to open-source projects, or sharing knowledge with 
                  the developer community.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default About;
