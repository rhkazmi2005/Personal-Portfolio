

import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <Home />
      <About />
      <Projects />
      <Contact />
      <footer className="mt-8 border-t border-zinc-900 px-4 pt-6 pb-12 text-center text-base text-slate-400 font-medium">
        Reza Kazmi © 2026
      </footer>
    </main>
  );
}

