import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

import resume from '../assets/Aguilar_Ileana_Resume_2024.pdf';

const Navbar = () => {
  const [isSectionVisible, setIsSectionVisible] = useState({
    about: false,
    work: false,
    experience: false,
    contact: false
  });

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['about', 'work', 'experience', 'contact'];
      const updatedVisibility = {};

      sections.forEach(section => {
        const sectionElement = document.getElementById(section);
        if (sectionElement) {
          const rect = sectionElement.getBoundingClientRect();
          updatedVisibility[section] = rect.top <= 0 && rect.bottom >= 0;
        }
      });

      setIsSectionVisible(updatedVisibility);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isAnySectionVisible = Object.values(isSectionVisible).some(visible => visible);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${isAnySectionVisible ? 'section-visible' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <p className="navbar-logo">
        <Link to="home" smooth={true} duration={500} offset={-10000}>Ileana</Link>
      </p>
      <div className="menu-toggle" onClick={handleMenuToggle}>
        <div className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <ul className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
        <div className='menu-links'>
        <li onClick={handleLinkClick}>
          <Link to="about" smooth={true} duration={500}>
            <svg width="20" height="20" viewBox="0 0 303 301" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M151.5 136.501C137.612 136.501 125.724 131.132 115.834 120.393C105.945 109.655 101 96.7465 101 81.6673C101 66.5882 105.945 53.6795 115.834 42.9413C125.724 32.2031 137.612 26.834 151.5 26.834C165.388 26.834 177.276 32.2031 187.166 42.9413C197.055 53.6795 202 66.5882 202 81.6673C202 96.7465 197.055 109.655 187.166 120.393C177.276 131.132 165.388 136.501 151.5 136.501ZM50.5 246.167V207.784C50.5 200.016 52.3433 192.878 56.0298 186.372C59.7163 179.865 64.6063 174.893 70.7 171.457C83.7458 164.374 97.0021 159.065 110.469 155.528C123.935 151.991 137.612 150.218 151.5 150.209C165.388 150.2 179.065 151.973 192.531 155.528C205.998 159.083 219.254 164.393 232.3 171.457C238.402 174.884 243.296 179.856 246.983 186.372C250.669 192.888 252.508 200.025 252.5 207.784V246.167H50.5ZM75.75 218.751H227.25V207.784C227.25 205.271 226.673 202.986 225.52 200.93C224.367 198.874 222.84 197.274 220.938 196.132C209.575 189.963 198.107 185.339 186.534 182.259C174.961 179.179 163.283 177.635 151.5 177.626C139.717 177.617 128.039 179.161 116.466 182.259C104.893 185.357 93.425 189.981 82.0625 196.132C80.1687 197.274 78.6411 198.874 77.4796 200.93C76.3181 202.986 75.7416 205.271 75.75 207.784V218.751ZM151.5 109.084C158.444 109.084 164.39 106.402 169.339 101.037C174.288 95.6727 176.758 89.216 176.75 81.6673C176.742 74.1186 174.271 67.6665 169.339 62.3112C164.407 56.9558 158.461 54.2689 151.5 54.2507C144.539 54.2324 138.597 56.9192 133.674 62.3112C128.75 67.7031 126.275 74.1552 126.25 81.6673C126.225 89.1795 128.699 95.6361 133.674 101.037C138.648 106.438 144.59 109.121 151.5 109.084Z" fill="var(--dark-navy)" />
            </svg>
            About
          </Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="experience" smooth={true} duration={500}>
            <svg width="34" height="17" viewBox="0 0 234 217" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M195 54.2507C200.655 54.2507 205.238 56.059 208.845 59.5852C212.55 63.2923 214.5 67.3611 214.5 72.334V171.792C214.5 176.765 212.55 180.834 208.845 184.541C205.238 188.067 200.655 189.876 195 189.876H39C33.345 189.876 28.7625 188.067 25.155 184.541C21.45 180.834 19.5 176.765 19.5 171.792V72.334C19.5 67.3611 21.45 63.2923 25.155 59.5852C28.7625 56.059 33.345 54.2507 39 54.2507H78V36.1673C78 30.9232 79.95 26.6736 83.655 23.3282C87.2625 19.8923 91.845 18.084 97.5 18.084H136.5C142.155 18.084 146.738 19.8923 150.345 23.3282C154.05 26.6736 156 30.9232 156 36.1673V54.2507H195ZM39 72.334V171.792H195V72.334H39ZM136.5 54.2507V36.1673H97.5V54.2507H136.5Z" fill="var(--dark-navy)" />
            </svg>
            Experience
          </Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="work" smooth={true} duration={500}>
            <svg width="48" height="19" viewBox="0 0 248 219" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.3332 182.5C35.6498 182.5 30.7863 180.715 26.7425 177.144C22.6987 173.573 20.6734 169.275 20.6665 164.25V54.75C20.6665 49.7312 22.6918 45.4364 26.7425 41.8655C30.7932 38.2946 35.6567 36.5061 41.3332 36.5H103.333L124 54.75H206.666C212.35 54.75 217.217 56.5385 221.267 60.1155C225.318 63.6925 227.34 67.9873 227.333 73V164.25C227.333 169.269 225.311 173.567 221.267 177.144C217.224 180.721 212.357 182.506 206.666 182.5H41.3332ZM41.3332 164.25H206.666V73H115.475L94.8082 54.75H41.3332V164.25Z" fill="var(--dark-navy)" />
            </svg>
            Work
          </Link>
        </li>
        <li onClick={handleLinkClick}>
          <Link to="contact" smooth={true} duration={500}>
            <svg width="26" height="30" viewBox="0 0 236 183" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M216.333 45.75C216.333 37.3625 207.483 30.5 196.666 30.5H39.3332C28.5165 30.5 19.6665 37.3625 19.6665 45.75V137.25C19.6665 145.638 28.5165 152.5 39.3332 152.5H196.666C207.483 152.5 216.333 145.638 216.333 137.25V45.75ZM196.666 45.75L118 83.875L39.3332 45.75H196.666ZM196.666 137.25H39.3332V61L118 99.125L196.666 61V137.25Z" fill="var(--dark-navy)" />
            </svg>
            Contact
          </Link>
        </li>
        </div>
        <a href={resume} >
          <button className="navbar-resume">Resume</button>
        </a>
      </ul>
    </nav>
  );
};

export default Navbar;
