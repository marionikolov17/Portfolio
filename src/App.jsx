/* eslint-disable no-unused-vars */
import CareerSection from "./components/CareerSection/CareerSection"
import ContactSection from "./components/ContactSection/ContactSection"
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation"
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/HeroSection/HeroSection"
import MobileNavigation from "./components/MobileNavigation/MobileNavigation"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import ServicesSection from "./components/ServicesSection/ServicesSection"
import Testimonials from "./components/Testimonials/Testimonials"

function App() {
  return (
    <>
      <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
        <DesktopNavigation />
        <MobileNavigation />
        <HeroSection />
        <ProjectsSection />
        {/* <ServicesSection /> */}
        <Testimonials />
        <CareerSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  )
}

export default App
