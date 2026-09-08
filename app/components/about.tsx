"use client";

import React from "react";
import { motion } from "motion/react";

const photographyImages = [
  {
    src: "/volcano forest.jpg",
    alt: "Foggy forest photography shot",
  },
  {
    src: "/Fuego Volcano Eruption.jpg",
    alt: "Fuego volcano eruption photo",
  },
  {
    src: "/Medellín.jpg",
    alt: "Medellin photo",
  },
];

const About = () => {
  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex items-center justify-center">
      <section id="about" className="w-full">
        <div className="max-w-6xl mx-auto bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">About</span>
              <span className="text-red-500 ml-2">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            <div className="text-lg text-white max-w-3xl mx-auto space-y-7 leading-relaxed">
              <p>
                Hey, I&apos;m Reza. I study Computer Information Systems at the University of Houston and have experience working in cybersecurity. I&apos;m most interested in security operations and cloud security, and I&apos;m always trying to learn more about the field.
              </p>
              <p>
                When I&apos;m not focused on school or work, I&apos;m usually at the gym, riding my bike, taking film photos, or planning a trip somewhere new.
              </p>
              <p>
                I made this website to share my projects, experiences, and some of the things I enjoy outside of technology.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="mt-14"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-8">
              Photography
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {photographyImages.map((image, index) => (
                <div
                  key={image.alt}
                  className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#111111] shadow-lg shadow-red-500/5"
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    loading="lazy"
                    className="h-[26rem] w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                  <div className="px-5 pb-5 pt-4">
                    <p className="text-sm md:text-base text-white/80">
                      {index === 0 && "Volcano Forest"}
                      {index === 1 && "Fuego Volcano Eruption"}
                      {index === 2 && "Medellin"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
