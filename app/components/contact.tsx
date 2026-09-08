"use client";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, FileText } from "lucide-react";

const GitHubSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.51 11.51 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.562 21.8 24 17.302 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);

const LinkedInSVG = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

// Sign up at formspree.io, create a form, then replace YOUR_FORM_ID below.
const FORMSPREE_ENDPOINT = "https://formspree.io/f/YOUR_FORM_ID";

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Email",
    value: "rezakazmi2005@gmail.com",
    link: "mailto:rezakazmi2005@gmail.com",
  },
  {
    icon: <MapPin className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Location",
    value: "Houston, TX",
    link: "#",
  },
  {
    icon: <Phone className="h-5 w-5 sm:h-6 sm:w-6" />,
    title: "Phone",
    value: "+1 (469) 748-6707",
    link: "tel:+14697486707",
  },
];

const socialLinks = [
  {
    icon: <GitHubSVG className="h-5 w-5 sm:h-6 sm:w-6" />,
    name: "GitHub",
    url: "https://github.com/rhkazmi2005",
  },
  {
    icon: <LinkedInSVG className="h-5 w-5 sm:h-6 sm:w-6" />,
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/reza-kazmi/",
  },
  {
    icon: <FileText className="h-5 w-5 sm:h-6 sm:w-6" />,
    name: "Resume",
    url: "/resume.pdf",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(formData),
      });
      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full px-4 py-3 bg-slate-900 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-red-500 transition-colors duration-200";

  return (
    <div className="py-12 px-4 sm:px-6 lg:px-8 bg-black min-h-screen flex items-center justify-center">
      <section id="contact" className="w-full">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Get In</span>
              <span className="text-red-500 ml-2">Touch</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-500 to-red-700 mx-auto mb-8"></div>
            <p className="text-lg text-white max-w-3xl mx-auto">
              Please do not hesitate to contact me with any questions or inquiries!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Left — contact info + socials */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Contact Information</h3>
              <div className="flex flex-col gap-4 mb-10">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-5 bg-zinc-950 rounded-xl border border-zinc-800 group hover:bg-zinc-900 hover:border-red-500/50 transition-colors duration-300"
                  >
                    <div className="p-3 bg-gradient-to-r from-red-500 to-red-700 text-white rounded-lg group-hover:scale-110 transition-transform duration-300 shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <p className="text-slate-400 text-xs font-medium uppercase tracking-wider">{info.title}</p>
                      <p className="text-white font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              <h4 className="text-xl font-semibold text-white mb-6">Connect With Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    title={social.name}
                    className="p-4 bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 rounded-xl border border-slate-600 text-white hover:text-red-400 hover:border-red-500/50 transition-all duration-300"
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Right — contact form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-white mb-8">Send a Message</h3>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className={inputClass}
                  />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className={inputClass}
                  />
                </div>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="Subject"
                  required
                  className={inputClass}
                />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your Message"
                  required
                  rows={6}
                  className={inputClass + " resize-none"}
                />

                {status === "success" && (
                  <p className="text-green-400 text-sm">Message sent! I&apos;ll get back to you soon.</p>
                )}
                {status === "error" && (
                  <p className="text-red-400 text-sm">Something went wrong. Please try emailing me directly.</p>
                )}

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-gradient-to-r from-red-500 to-red-700 text-white font-semibold rounded-xl hover:shadow-lg hover:shadow-red-500/20 hover:scale-[1.02] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  <Send className="h-4 w-4" />
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
