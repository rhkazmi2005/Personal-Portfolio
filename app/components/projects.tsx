"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ExternalLink, Github, Calendar, Code, Palette, Database } from "lucide-react";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "A full-stack e-commerce solution with modern UI, payment integration, and admin dashboard.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "TypeScript", "Stripe", "PostgreSQL", "Tailwind CSS"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      featured: true
    },
    {
      id: 2,
      title: "Task Management App",
      description: "A collaborative task management application with real-time updates and team collaboration features.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      category: "fullstack",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      featured: true
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description: "A responsive weather application with location-based forecasts and interactive charts.",
      image: "/api/placeholder/600/400",
      technologies: ["React", "Chart.js", "OpenWeather API", "CSS3"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023",
      featured: false
    },
    {
      id: 4,
      title: "REST API Service",
      description: "A scalable REST API with authentication, rate limiting, and comprehensive documentation.",
      image: "/api/placeholder/600/400",
      technologies: ["Node.js", "Express", "JWT", "PostgreSQL", "Swagger"],
      category: "backend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2023",
      featured: false
    },
    {
      id: 5,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website with smooth animations and dark mode support.",
      image: "/api/placeholder/600/400",
      technologies: ["Next.js", "Framer Motion", "Tailwind CSS", "TypeScript"],
      category: "frontend",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      featured: true
    },
    {
      id: 6,
      title: "Mobile Banking App",
      description: "A secure mobile banking application with biometric authentication and transaction management.",
      image: "/api/placeholder/600/400",
      technologies: ["React Native", "Node.js", "PostgreSQL", "JWT", "Biometric"],
      category: "mobile",
      liveUrl: "https://example.com",
      githubUrl: "https://github.com/example",
      date: "2024",
      featured: false
    }
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: <Code className="h-4 w-4" /> },
    { id: "frontend", name: "Frontend", icon: <Palette className="h-4 w-4" /> },
    { id: "backend", name: "Backend", icon: <Database className="h-4 w-4" /> },
    { id: "fullstack", name: "Full Stack", icon: <Code className="h-4 w-4" /> },
    { id: "mobile", name: "Mobile", icon: <Code className="h-4 w-4" /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <HeroHighlight containerClassName="py-20 px-4 bg-black min-h-screen flex items-center justify-center">
      <section id="projects" className="w-full">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
              My Projects
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-gray-300 dark:text-gray-300 light:text-gray-600 max-w-3xl mx-auto">
              Here are some of my recent projects that showcase my skills and experience 
              in web development, mobile apps, and full-stack solutions.
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveFilter(category.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700 border border-gray-700"
                }`}
              >
                {category.icon}
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-700 ${
                  project.featured ? "ring-2 ring-red-500/20" : ""
                }`}
              >
                <div className="relative h-48 bg-gradient-to-br from-red-900/20 to-red-800/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    {/* Your project image/content here */}
                  </div>
                </div>
                {/* Add the rest of your project card content here */}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </HeroHighlight> // ← THIS CLOSING TAG WAS MISSING
  );
};

export default Projects;