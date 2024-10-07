/* eslint-disable no-unused-vars */
import AboutSection from "./components/AboutSection/AboutSection"
import CareerSection from "./components/CareerSection/CareerSection"
import ContactSection from "./components/ContactSection/ContactSection"
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation"
import Footer from "./components/Footer/Footer"
import HeroSection from "./components/HeroSection/HeroSection"
import MobileNavigation from "./components/MobileNavigation/MobileNavigation"
import ProjectsSection from "./components/ProjectsSection/ProjectsSection"
import Testimonials from "./components/Testimonials/Testimonials"
import { useInitVisit } from "./hooks/useInitVisit"

function App() {

  // Tracking reports from here
  useInitVisit();

  return (
    <>
      <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
        <div className="w-full py-2 flex justify-center items-center bg-black">
          <p className="text-white text-sm">Managed by <a className="underline" href="https://portfolio-administrator.onrender.com/">Administrator</a></p>
        </div>
        <DesktopNavigation />
        <MobileNavigation />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <Testimonials />
        <CareerSection />
        <ContactSection />
        <Footer />
        <div className="fixed top-0 w-full h-full paper-bg -z-10"></div>
      </main>
    </>
  )
}

export default App
