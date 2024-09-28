import React, { useState, useEffect } from "react";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Services from "./components/Services/Services.jsx";
import Banner from "./components/Banner/Banner.jsx";
import AppStore from "./components/AppStore/AppStore.jsx";
import Testimonials from "./components/Testimonials/Testimonials.jsx";
import Footer from "./components/Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaArrowUp } from "react-icons/fa";


const App = () => {
  const [showScrollUpButton, setShowScrollUpButton] = useState(false);

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 700,
      easing: "ease-in",
      delay: 100,
    });
    AOS.refresh();

    const handleScroll = () => {
      const heroSection = document.getElementById("hero-section");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        if (window.scrollY > heroBottom) {
          setShowScrollUpButton(true);
        } else {
          setShowScrollUpButton(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200 overflow-x-hidden">
      <Navbar />
      <div id="hero-section">
        <Hero />
      </div>
      <Services />
      <Banner />
      <AppStore />
      <Testimonials />
      <Footer />
      {showScrollUpButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 p-2 rounded-full bg-blue-500 text-white shadow-lg hover:bg-blue-700 transition duration-200"
        >
          <FaArrowUp />
        </button>
      )}
    </div>
  );
};

export default App;
 