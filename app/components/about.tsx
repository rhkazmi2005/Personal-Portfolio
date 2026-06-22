"use client";

import React from "react";
import { motion } from "motion/react";

const skillCategories = [
  {
    category: "Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML", "CSS"],
  },
  {
    category: "Frameworks & Libraries",
    skills: ["React", "Next.js", "Tailwind CSS", "Shadcn/ui"],
  },
  {
    category: "Tools & Platforms",
    skills: ["Git", "GitHub", "Figma", "Vercel", "Linux"],
  },
];

const About = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex items-center justify-center">
      <section id="about" className="w-full">
        <div className="max-w-6xl mx-auto bg-transparent">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold mb-4">
              <span className="text-white">About</span>
              <span className="text-red-500 ml-2">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              I study Computer Information Systems at the University of Houston. I focus on building reliable and efficient digital systems. I enjoy learning new tools, exploring new environments, and improving how systems work. I like challenging problems and I take a steady, thoughtful approach. I am looking for an internship where I support real projects, learn from experienced teams, and use my skills to improve technical operations.
            </p>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-center mb-10">
              <span className="text-white">Tech</span>
              <span className="text-red-500 ml-2">Stack</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skillCategories.map((group, groupIdx) => (
                <motion.div
                  key={group.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: groupIdx * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border border-red-700/30 rounded-2xl p-6"
                >
                  <h4 className="text-red-400 font-semibold text-sm uppercase tracking-widest mb-4">
                    {group.category}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1.5 bg-black/50 border border-red-700/40 text-white text-sm rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
