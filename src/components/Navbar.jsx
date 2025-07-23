import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: '0px 0px -50% 0px'
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  return (
    <nav
      className={`${
        scrolled ? "bg-primary bg-opacity-80 backdrop-blur-md" : "bg-transparent"
      } w-full flex items-center p-6 fixed top-0 z-40 transition-all duration-300 pointer-events-auto`}
    >
      <div className='w-full flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("hero");
            window.scrollTo(0, 0);
          }}
        >
          <img src="/logo.svg" alt="Universe 21 Logo" className="w-10 h-10" />
          <p className='text-white text-[18px] font-orbitron font-bold cursor-pointer flex'>
            Universe 21 <span className="text-quaternary ml-1">Studios</span>
          </p>
        </Link>

        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.id ? "text-quaternary" : "text-white"
              } hover:text-quaternary text-[18px] font-medium cursor-pointer transition-colors duration-200`}
              onClick={() => setActive(nav.id)}
            >
              <a href={`#${nav.id}`}>
                {nav.title}
                {active === nav.id && (
                  <motion.div 
                    className="h-[2px] bg-quaternary mt-1"
                    layoutId="activeNavIndicator"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='w-[28px] h-[28px] object-contain cursor-pointer'
            onClick={() => setToggle(!toggle)}
          />

          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ 
              opacity: toggle ? 1 : 0, 
              y: toggle ? 0 : -50,
              pointerEvents: toggle ? "auto" : "none" 
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl backdrop-blur-md bg-black bg-opacity-70"
          >
            <ul className='list-none flex justify-end items-start flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
