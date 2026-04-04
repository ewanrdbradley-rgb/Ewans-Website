import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Experience />
        <Projects />
        <Contact />
      </main>
      <footer className="py-8 px-4 text-center text-jeani-muted text-sm border-t border-jeani-border">
        <p>© {new Date().getFullYear()} Ewan Bradley</p>
      </footer>
    </>
  );
}
