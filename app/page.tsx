import Grid from "./Components/Grid"
import Hero from "./Sections/Hero";
import About from "./Sections/About";
import Experience from "./Sections/Experience"
import Projects from "./Sections/Projects";
import Blog from "./Sections/Blog";
import Skills from "./Sections/Skills.jsx"
import Contact from "./Sections/Contact"

export default function page() {
  return (
    <>
      <Grid />
      <main>
        <Hero />
        <div className="line" />
        <About />
        <Skills />
        <div className="line" />
        <Projects />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <aside className="overlay" />
    </>
  )
}

