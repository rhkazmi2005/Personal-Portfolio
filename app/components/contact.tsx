"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Mail, Phone, MapPin, Send, Github, Linkedin, FileText, Twitter, Instagram } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" });
    setIsSubmitting(false);
    
    // You would typically handle the actual form submission here
    alert("Thank you for your message! I'll get back to you soon.");
  };

  const contactInfo = [
    {
      icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: "Email",
      value: "rezakazmi2005@gmail.com",
      link: "rezakazmi2005@gmail.com"
    },
    {
      icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: "Location",
      value: "Houston, TX",
      link: "#"
    },
    {
      icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />, 
      title: "Phone",
      value: "+1 (469) 748-6707",
      link: "tel:+15551234567"
    }
  ];

  const socialLinks = [
    {
      icon: <Github className="h-5 w-5 sm:h-6 sm:w-6" />, 
      name: "GitHub",
  url: "https://github.com/rhkazmi2005",
  color: "hover:text-red-600"
    },
    {
      icon: <Linkedin className="h-5 w-5 sm:h-6 sm:w-6" />, 
      name: "LinkedIn",
  url: "https://www.linkedin.com/in/reza-kazmi/",
  color: "hover:text-red-600"
    },
    {
      icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />,
      name: "Resume",
      url: "/resume.pdf", // You'll need to add your resume PDF file to the public folder
      color: "hover:text-red-600"
    }
  ];

  return (
  <HeroHighlight containerClassName="py-12 px-4 sm:px-6 bg-black min-h-screen flex items-center justify-center">
      <section id="contact" className="w-full">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white dark:text-white light:text-gray-900 mb-4">
            <span className="group inline-block px-4 sm:px-8 py-2 sm:py-3 rounded-full bg-[#232325]/80 border border-white/20 shadow-lg transition duration-300 hover:bg-[#232325]/60 cursor-pointer">
              <span className="bg-gradient-to-r from-red-500 to-red-700 bg-clip-text text-transparent text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
                Get In Touch
              </span>
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
          <p className="text-lg text-white max-w-3xl mx-auto"> 
            Please do not hesitate to contact me with any questions or inquiries!
          </p>
        </motion.div>

  <div className="w-full flex flex-col items-center">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="w-full"
          >
            <h3 className="text-2xl font-bold text-white mb-8">
              Contact Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8 w-full">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.title}
                  href={info.link}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center justify-center gap-3 p-6 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 group w-full text-center"
                >
                  <div className="flex items-center justify-center p-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <div className="flex flex-col items-center justify-center w-full">
                    <h4 className="font-semibold text-white mb-2 text-lg">
                      {info.title}
                    </h4>
                    <p className="text-gray-300 break-words w-full text-sm sm:text-base">
                      {info.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="mt-12">
              <h4 className="text-xl font-semibold text-white mb-8">
                Connect With Me!
              </h4>
              <div className="flex flex-wrap justify-center gap-6">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className={`p-4 bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-700 text-gray-300 ${social.color}`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
        </div>
      </section>
    </HeroHighlight>
  );
};

export default Contact;
