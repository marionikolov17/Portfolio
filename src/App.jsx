import AboutSection from "./components/AboutSection/AboutSection"
import HeroSection from "./components/HeroSection/HeroSection"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {
  return (
    <>
      <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
        <HeroSection />
        <ProjectsSection />
        <ServicesSection />
        <Testimonials />
        <AboutSection />
      </main>
    </>
  )
}

export default App
