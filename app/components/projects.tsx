"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { ExternalLink, Github, Calendar, Code, Palette, Database } from "lucide-react";
import { EvervaultCard } from "@/components/ui/evervault-card";

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const projects = [
    {
      id: 1,
  title: "Python Inventory Manager",
  description: "A Python-based inventory management system that processes electronic device inventory data, generates detailed reports, and provides an interactive command-line tool for querying and recommendations.",
      image: "/api/placeholder/600/400",
  technologies: ["Python", "HTML"],
      category: "fullstack",
      liveUrl: "https://example.com",
  githubUrl: "https://github.com/rhkazmi2005/Python-Inventory-Manager",
  date: "2025",
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
    { id: "all", name: "All Projects", icon: <Code className="h-4 w-4" /> }
  ];

  const filteredProjects = activeFilter === "all" 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
  <HeroHighlight containerClassName="py-6 px-2 bg-black min-h-screen flex items-center justify-center">
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
              <span className="inline-block px-8 py-3 rounded-full bg-white/10 border border-white/20 shadow-lg backdrop-blur-md">
                <span className="bg-gradient-to-r from-red-400 via-red-600 to-red-700 bg-clip-text text-transparent text-4xl md:text-5xl font-bold tracking-tight">
                  My Projects
                </span>
              </span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>

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
            {filteredProjects.slice(0, 1).map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`bg-[#18181b] rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border border-red-700/40 ${
                  project.featured ? "ring-2 ring-red-500/30" : ""
                }`}
              >
                <div className="relative h-48 flex items-center justify-center">
                  <EvervaultCard text={project.title} className="h-44 w-44" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                    {project.title}
                  </h3>
                  <p className="text-white mb-4 min-h-[60px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-red-500 to-red-700 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-red-400 hover:text-red-600 transition">
                      <Github className="h-5 w-5" />
                    </a>
                    <span className="ml-auto text-xs text-red-300 flex items-center gap-1">
                      <Calendar className="h-4 w-4" /> {project.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </HeroHighlight> // ← THIS CLOSING TAG WAS MISSING
  );
};

export default Projects;