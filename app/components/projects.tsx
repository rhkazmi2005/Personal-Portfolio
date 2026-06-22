"use client";
import { motion } from "motion/react";
import { Calendar } from "lucide-react";

const GitHubSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
import { EvervaultCard } from "@/components/ui/evervault-card";

const projects = [
  {
    id: 1,
    title: "Python Inventory Manager",
    description:
      "A Python-based inventory management system that processes electronic device inventory data, generates detailed reports, and provides an interactive command-line tool for querying and recommendations.",
    technologies: ["Python", "HTML"],
    githubUrl: "https://github.com/rhkazmi2005/Python-Inventory-Manager",
    date: "2025",
    winner: false,
  },
  {
    id: 2,
    title: "FLEX",
    description:
      "FLEX is a web platform built at HackMISSO 2025. Designed the UI/UX and led frontend development. Winner of Best Overall Hack.",
    technologies: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Figma", "Vercel", "Shadcn/ui"],
    liveUrl:
      "https://www.figma.com/proto/FtDOXcI0WTDM8UapmXWuKd/HackMISSO-25?node-id=68-1228&t=4G1jxsrVpgZB1HGX-1&starting-point-node-id=68%3A1228",
    slideshowUrl:
      "https://www.canva.com/design/DAGi3HvgJuw/xsMhVvietyvpGQzMRc06rg/view?utm_content=DAGi3HvgJuw&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h6e092f8254#1",
    date: "2025",
    winner: true,
  },
];

const Projects = () => {
  return (
    <div className="py-16 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex items-center justify-center">
      <section id="projects" className="w-full">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">My</span>
              <span className="text-red-500 ml-2">Projects</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden border bg-gradient-to-br from-[#1e293b] via-[#232325] to-[#18181b] border-red-700/60 ring-2 ring-red-500/30"
              >
                <div className="relative h-48 flex items-center justify-center">
                  <EvervaultCard text={project.title} className="h-44 w-44" />
                  {project.winner && (
                    <span className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md z-10 border border-red-700">
                      Winner: Best Overall Hack
                    </span>
                  )}
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-white mb-4 min-h-[60px]">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full text-xs font-medium shadow-sm bg-gradient-to-r from-red-500 to-red-700 text-white"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center gap-4">
                    {project.id === 2 ? (
                      <>
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-full text-xs font-medium shadow-sm bg-red-700 text-white border border-red-400 hover:bg-red-500 transition"
                        >
                          View Prototype
                        </a>
                        <a
                          href={project.slideshowUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-3 py-1 rounded-full text-xs font-medium shadow-sm bg-red-700 text-white border border-red-400 hover:bg-red-500 transition"
                        >
                          View Slideshow
                        </a>
                      </>
                    ) : (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-red-400 hover:text-red-600 transition"
                      >
                        <GitHubSVG className="h-5 w-5" />
                      </a>
                    )}
                    <span className="ml-auto text-xs flex items-center gap-1 text-red-300">
                      <Calendar className="h-4 w-4" /> {project.date}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
