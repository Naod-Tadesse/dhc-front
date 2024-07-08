import React, { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import "./layout.css";
import Landing from "../components/Landing";
import AboutUs from "../components/AboutUs";
import Footer from "../components/Footer";
const Layout = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Navbar isScrolled={isScrolled} />
      <Landing />
      <AboutUs />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
