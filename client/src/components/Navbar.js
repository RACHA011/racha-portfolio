import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import icon from '../assets/images/icon.png';
import github from '../assets/svg/github.svg';
import linkedin from '../assets/svg/linkedin.svg';
import '../assets/css/Navbar.css';

function Navbar() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible]);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark fixed-top ${visible ? '' : 'navbar-hidden'}`}>
      <div className="container-fluid">
        <Link className="navbar-brand nav-link" to="/">
          <img src={icon} alt="icon" style={{ width: '30px', marginRight: '10px' }} />
          <strong>Racha portfolio</strong>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/projects">
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/resume">
                Resume
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
            </li>
          </ul>
          <ul className="navbar-nav list-inline">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/adivhaho-ratshalingwa-52060629a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedin} alt="LinkedIn" style={{ width: '30px', marginRight: '10px' }} />
              </a>
              <a className="nav-link" href="https://github.com/RACHA011/" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" style={{ width: '30px', marginRight: '10px' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
