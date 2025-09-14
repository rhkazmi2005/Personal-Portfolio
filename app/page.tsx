
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <FloatingNav />
      <Home />
      <About />
      <Contact />
    </main>
  );
}

