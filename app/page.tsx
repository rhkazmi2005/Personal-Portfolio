

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Portfolio() {
  return (
    <main className="min-h-screen bg-black">
      <FloatingNav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer className="relative z-10 flex min-h-24 w-full items-center justify-center bg-black px-4 py-8 text-center text-base text-slate-400 font-medium">
        Reza Kazmi © 2026
      </footer>
    </main>
  );
}

