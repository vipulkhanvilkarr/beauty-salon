import { Link } from "react-router-dom";
import "../styles/Navbar.css";
import brandLogo from "../assets/Home/brand logo.png"; // Corrected path
import { useState, useEffect } from "react";
import { IoMenu, IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Check initial size

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={isMobile ? "navbar-mobile" : "navbar-web"}>
      <div className={isMobile ? "brand-logo-mobile" : "brand-logo-web"}>
        <img src={brandLogo} alt="Mantra Offer" />
        {isMobile && (
          <button className="navbar-toggle" onClick={toggleNavbar}>
            {isOpen ? <IoClose size={30} /> : <IoMenu size={30} />}
          </button>
        )}
      </div>
      <div className={`${isMobile ? "navbar-links-mobile" : "navbar-links-web"} ${isOpen ? "open" : ""}`}>
        <ul className={isMobile ? "navbar-list-mobile" : "navbar-list-web"}>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/gallery">Gallery</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;