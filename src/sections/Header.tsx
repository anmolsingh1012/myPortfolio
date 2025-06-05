"use client"
import { useEffect, useState } from "react";

export const Header = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <div
      className={`flex justify-center items-center fixed top-0 w-full z-10 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-[60px]"
      }`}
      style={{ height: '60px' }} // fix height to match translate value
    >
      <nav className="flex gap-1 p-0.5 border border-white/15 rounded-full bg-white/10 backdrop-blur">
        <a href="#" className="nav-item">
          Home
        </a>
        <a href="#aboutMe" className="nav-item">
          About
        </a>
        <a href="#project" className="nav-item">
          Projects
        </a>
        <a href="#contact" className="nav-item">
          Contact
        </a>
        <a
          href="https://drive.google.com/file/d/1LknDzzVwOYqPkmYWMKBtVjZNvA7ZAx2O/view?usp=sharing"
          target="_blank"
          className="nav-item bg-white text-gray-900 hover:bg-white/70 hover:text-gray-900"
        >
          Resume
        </a>
      </nav>
    </div>
  );
};
