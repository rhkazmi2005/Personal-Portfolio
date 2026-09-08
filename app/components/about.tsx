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
    skills: [
      "Microsoft Defender XDR",
      "SentinelOne",
      "Microsoft Sentinel",
      "Abnormal Security",
      "Critical Start",
      "Tenable",
      "VirusTotal",
      "Entra ID",
      "Active Directory",
      "Intune",
      "Windows Hello for Business",
      "Microsoft Authenticator",
      "Power BI",
      "Power Query",
      "Excel",
      "SQL",
      "PowerShell",
      "Halo ITSM",
      "ThreatLocker",
      "Azure Sentinel",
      "Wazuh",
      "VMware",
      "KQL",
      "AWS",
      "EC2",
      "RDS",
      "S3",
      "Lambda",
    ],
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
              Hey, I’m Reza. I study Computer Information Systems at the University of Houston and have experience working in cybersecurity. I’m most interested in security operations and cloud security, and I’m always trying to learn more about the field.

              When I’m not focused on school or work, I’m usually at the gym, riding my bike, taking film photos, or planning a trip somewhere new.

              I made this website to share my projects, experiences, and some of the things I enjoy outside of technology.
            </p>
          </motion.div>

        </div>
      </section>
    </div>
  );
};

export default About;
