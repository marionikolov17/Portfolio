/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import AboutSection from "./components/AboutSection/AboutSection";
import CareerSection from "./components/CareerSection/CareerSection";
import ContactSection from "./components/ContactSection/ContactSection";
import DesktopNavigation from "./components/DesktopNavigation/DesktopNavigation";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import MobileNavigation from "./components/MobileNavigation/MobileNavigation";
import ProjectsSection from "./components/ProjectsSection/ProjectsSection";
import Testimonials from "./components/Testimonials/Testimonials";
import { useInitVisit } from "./hooks/useInitVisit";
import { useMutation } from "@tanstack/react-query";
import { createClickRecord, updateRecords } from "./services/reports.service";

function App() {
  const [fetchedData, setFetchedData] = useState();
  const [createdNotificationID, setCreatedNotificationID] = useState();
  const [createdViewID, setCreatedViewID] = useState();
  const [time, setTime] = useState(0);

  const clickMutation = useMutation({
    mutationFn: (data) => createClickRecord(data)
  });

  const handleClickNotification = (message) => {
    clickMutation.mutate({ fetchedData, message });
  }

  const { mutate } = useMutation({
    mutationFn: (data) => updateRecords(data),
    onError: (err) => console.log(err),
  });

  // Tracking reports from here
  useInitVisit(setFetchedData, setCreatedNotificationID, setCreatedViewID);

  // Update current visit time every 5 seconds
  useEffect(() => {
    let timeoutID = setTimeout(() => {
      setTime((x) => x + 1);
    }, 1000);

    if (time > 600) return;

    if (time % 5 == 0 && time > 0) {
      mutate({ createdNotificationID, createdViewID, totalTime: time });
    }

    return () => clearTimeout(timeoutID);
  }, [createdNotificationID, createdViewID, mutate, time]);

  return (
    <>
      <main className="w-full absolute min-h-full font-montserrat overflow-x-hidden">
        <div className="w-full py-2 flex justify-center items-center bg-black">
          <p className="text-white text-sm">
            Managed by{" "}
            <a
              className="underline"
              href="https://portfolio-administrator.onrender.com/"
            >
              Administrator
            </a>
          </p>
        </div>
        <DesktopNavigation handleClickNotification={handleClickNotification}/>
        <MobileNavigation handleClickNotification={handleClickNotification}/>
        <HeroSection />
        <AboutSection />
        <ProjectsSection handleClickNotification={handleClickNotification}/>
        <Testimonials />
        <CareerSection />
        <ContactSection />
        <Footer />
        <div className="fixed top-0 w-full h-full paper-bg -z-10"></div>
      </main>
    </>
  );
}

export default App;
