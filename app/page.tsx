import Grid from "./Components/grid"
import Hero from "./Sections/hero";
import About from "./Sections/about";
import Experience from "./Sections/experience"
import Projects from "./Sections/project";
import Blog from "./Sections/blog";
import Skills from "./Sections/skill.jsx"
import Contact from "./Sections/contact"
import { Analytics } from "@vercel/analytics/next"

export default function page() {
  return (
    <>
      <Grid />
      <Analytics />

      <main>
        <Hero />
        <div className="line" />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <aside className="overlay" />
    </>
  )
}

