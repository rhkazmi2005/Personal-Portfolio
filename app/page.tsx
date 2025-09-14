
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

