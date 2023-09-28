import React, { useState, useEffect } from "react";
import "../../index.css";
import "./sidebar.css";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleScroll = () => {
    const scrollPosition = window.scrollY;

    const sectionIds = ["#home", "#about", "#services", "#work", "#contact"];

    for (const id of sectionIds) {
      const section = document.querySelector(id);
      if (section) {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveLink(id);
          break;
        }
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <aside className={`aside ${isMenuOpen ? "show-menu" : "aside"}`}>
        <a href="#home" className="nav__logo">
          J.D
        </a>

        <nav className="nav">
          <div className="nav__menu">
            <ul className="nav__list">
              <li className="nav__item">
                <a
                  href="#home"
                  className={`nav__link ${activeLink === "#home" ? "active" : ""}`}
                  title="Home"
                >
                  <i className="icon-home"></i>
                </a>
              </li>
              <li className="nav__item" title="About Me">
                <a
                  href="#about"
                  className={`nav__link ${activeLink === "#about" ? "active" : ""}`}
                >
                  <i className="icon-user-following"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#services"
                  className={`nav__link ${activeLink === "#services" ? "active" : ""}`}
                  title="Services"
                >
                  <i className="icon-briefcase"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#work"
                  className={`nav__link ${activeLink === "#work" ? "active" : ""}`}
                  title="Portfolio"
                >
                  <i className="icon-layers"></i>
                </a>
              </li>

              <li className="nav__item">
                <a
                  href="#contact"
                  className={`nav__link ${activeLink === "#contact" ? "active" : ""}`}
                  title="Contact"
                >
                  <i className="icon-bubble"></i>
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="nav__footer">
          <span className="copyright">&copy; 2023 - TILL DATE.</span>
        </div>
      </aside>
      <div
        className={`nav__toggle ${
          isMenuOpen ? "nav__toggle-open" : "nav__toggle"
        }`}
        onClick={toggleMenu}
      >
        <i className="icon-menu"></i>
      </div>
    </>
  );
}

export default Navbar;

