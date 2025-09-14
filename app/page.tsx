
import Home from "./components/home";
import About from "./components/about";
import Projects from "./components/projects";
import Contact from "./components/contact";

export default function Portfolio() {
  return (
    <main className="min-h-screen">
      <Home />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
