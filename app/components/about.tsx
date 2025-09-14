"use client";
import React from "react";
import { motion } from "motion/react";
import { Code, Palette, Database, Smartphone, Globe, Zap } from "lucide-react";

const About = () => {
  const skills = [
    { name: "Frontend Development", icon: <Code className="h-6 w-6" />, description: "React, Next.js, TypeScript, Tailwind CSS" },
    { name: "UI/UX Design", icon: <Palette className="h-6 w-6" />, description: "Figma, Adobe Creative Suite, Design Systems" },
    { name: "Backend Development", icon: <Database className="h-6 w-6" />, description: "Node.js, Python, PostgreSQL, MongoDB" },
    { name: "Mobile Development", icon: <Smartphone className="h-6 w-6" />, description: "React Native, Flutter, iOS, Android" },
    { name: "Web Technologies", icon: <Globe className="h-6 w-6" />, description: "HTML5, CSS3, JavaScript, REST APIs" },
    { name: "Performance", icon: <Zap className="h-6 w-6" />, description: "Optimization, Testing, DevOps, CI/CD" },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-gray-100 to-white dark:from-black dark:to-gray-900">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating beautiful, 
            functional, and user-centered digital experiences. With expertise in modern 
            web technologies and a keen eye for design, I bring ideas to life through code.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              My Journey
            </h3>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
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

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-red-100 to-red-200 dark:from-red-900/20 dark:to-red-800/20 p-8 rounded-2xl"
          >
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600 dark:text-red-400">3+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-700 dark:text-red-300">50+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-800 dark:text-red-200">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Client Satisfaction</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-900 dark:text-red-100">24/7</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">Support Available</div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">
            Skills & Technologies
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-slate-800 p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg mr-4">
                    {skill.icon}
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {skill.name}
                  </h4>
                </div>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
