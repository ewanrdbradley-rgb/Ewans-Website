import Navbar from "@/components/layout/Navbar";
import Marquee from "@/components/ui/Marquee";
import Hero from "@/components/sections/Hero";
import Journey from "@/components/sections/Journey";
import Experience from "@/components/sections/Experience";
import Education from "@/components/sections/Education";
import Projects from "@/components/sections/Projects";
import Press from "@/components/sections/Press";
import Contact from "@/components/sections/Contact";

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Marquee items={["Decathlete", "Founder", "Researcher", "Builder"]} />
        <Journey />
        <Experience />
        <Education />
        <Projects />
        <Press />
        <Marquee
          items={["Move Better", "Live Longer", "All Day", "Every Day"]}
          art="/images/grad-blue-1.jpg"
        />
        <Contact />
      </main>
      <footer className="py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-faint text-xs border-t border-ink/15">
        <p>© {new Date().getFullYear()} Ewan Bradley</p>
        <p className="font-mono uppercase tracking-[0.2em]">
          Durham, NC — Built to move
        </p>
      </footer>
    </>
  );
}
