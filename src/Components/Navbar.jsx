import React, { useState } from "react";
import "../Components/Styles/Navbar.css";
import { FaBars } from "react-icons/fa6";
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <div className="logo">
              <h1>JASEELLALU</h1>
            </div>
            <ul className={isOpen ? "nav-link active" : "nav-link"}>
              <li>
                <a href="#">Works</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <div className="icon" onClick={toggleMenu}>
              <FaBars />
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Navbar;
