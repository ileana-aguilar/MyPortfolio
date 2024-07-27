import React, { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import './Home.css';  
import { Link } from 'react-scroll';

const Home = () => {
  const typedElement = useRef(null);
  const [fontSize, setFontSize] = useState(5); 
  const [isSectionVisible, setIsSectionVisible] = useState({
    about: false,
    work: false,
    experience: false,
  });

  useEffect(() => {
    const options = {
      strings: ["Hi, my name is Ileana Aguilar."],
      typeSpeed: 40,
      backSpeed: 50,
      loop: false
    };

    const typed = new Typed(typedElement.current, options);

    return () => {
      typed.destroy();
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const newFontSize = Math.min(20, 5 + scrollTop / 100); // Adjust the scaling factor as needed
      setFontSize(newFontSize);
      
      // Update visibility of sections
      const sections = ['about', 'work', 'experience'];
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

  return (
    <section id="home" className="home-section">
      <h1 style={{ fontSize: `${fontSize}vw` }}>
        <span ref={typedElement}></span>
      </h1>
      <p>On a mission to build a better tomorrow</p>
      <Link to="about" smooth={true} duration={500}><button className='learn-more-button'>Learn More About Me </button></Link>
      
      <div className={`social-icons-div ${isAnySectionVisible ? 'section-visible' : ''}`}>
        <ul className='social-icons'>
          <li>
            <a href="https://www.github.com/ileana-aguilar">
              <svg className="github-icon" width="44" height="29" viewBox="0 0 454 439" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_3_41)">
                  <path d="M119.459 112.97C114.73 101.3 114.919 87.9651 117.018 75.7646C131.47 79.9636 145.045 86.5886 157.122 95.3366C162.418 99.251 169.361 100.513 175.83 98.6291C192.429 93.8152 209.671 91.399 227 91.4588C245.179 91.4588 262.45 94.0196 278.132 98.6108C284.601 100.513 291.544 99.2328 296.821 95.3183C308.893 86.5722 322.461 79.9472 336.906 75.7463C339.006 87.9468 339.176 101.281 334.484 112.933C331.647 119.957 333.066 128.042 338.419 133.786C352.115 148.474 359.417 165.357 359.417 182.917C359.417 221.586 322.151 259.504 262.298 271.046C247.316 273.936 241.471 292.173 252.935 302.618C260.293 309.313 264.833 318.751 264.833 329.25V384.125C264.833 388.977 266.826 393.629 270.374 397.06C273.921 400.49 278.733 402.417 283.75 402.417C288.767 402.417 293.579 400.49 297.126 397.06C300.674 393.629 302.667 388.977 302.667 384.125V329.25C302.667 318.824 300.397 308.91 296.348 299.929C353.42 280.778 397.25 237.664 397.25 182.917C397.25 158.278 388.094 135.633 372.904 116.665C376.877 101.666 376.517 86.5566 375.004 74.9597C373.661 64.5701 371.788 50.9611 364.221 42.8396C352.966 30.7853 334.333 37.8825 321.091 42.2542C306.88 46.886 293.364 53.3132 280.894 61.369C263.284 57.017 245.176 54.8352 227 54.8755C208.197 54.8755 190.056 57.1619 173.069 61.3873C160.598 53.3315 147.082 46.9043 132.871 42.2725C119.629 37.8825 100.977 30.7853 89.7217 42.8396C82.0037 51.1074 80.3958 63.6372 79.0149 74.2829L78.9203 74.978C77.407 86.5932 77.0665 101.72 81.039 116.738C65.9056 135.688 56.75 158.297 56.75 182.917C56.75 237.646 100.58 280.778 157.651 299.929C153.528 309.064 151.378 318.917 151.333 328.885L148.155 329.507C134.592 331.317 125.909 329.689 120.007 327.275C105.631 321.385 98.2153 306.551 89.1732 295.21C83.536 288.167 75.3261 279.369 62.7276 275.308C60.3702 274.549 57.8812 274.247 55.4027 274.418C52.9243 274.589 50.505 275.23 48.2829 276.305C43.7952 278.477 40.3834 282.283 38.7981 286.887C37.2127 291.491 37.5836 296.515 39.8292 300.854C42.0748 305.194 46.0112 308.493 50.7723 310.026C61.3278 313.428 68.6297 330.915 75.3262 338.671C82.3821 346.865 91.7647 355.426 105.214 360.95C118.116 366.255 133.268 368.139 151.333 365.998V384.125C151.333 388.977 153.326 393.629 156.874 397.06C160.421 400.49 165.233 402.417 170.25 402.417C175.267 402.417 180.079 400.49 183.626 397.06C187.174 393.629 189.167 388.977 189.167 384.125V329.25C189.167 318.751 193.707 309.313 201.065 302.618C212.548 292.155 206.683 273.936 191.701 271.046C131.83 259.504 94.5833 221.586 94.5833 182.917C94.5833 165.394 101.866 148.511 115.543 133.822C120.896 128.079 122.296 119.994 119.459 112.97Z" fill="var(--dark-navy)"/>
                </g>
                <defs>
                  <clipPath id="clip0_3_41">
                    <rect width="454" height="439" fill="white"/>
                  </clipPath>
                </defs>
              </svg>
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/ileana-a-141904140/">
              <svg className="linkedin-icon" width="14" height="35" viewBox="0 0 314 335" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M65.8972 37.2388C65.8928 47.1102 62.4173 56.5753 56.2351 63.5519C50.053 70.5286 41.6706 74.4453 32.9321 74.4403C24.1936 74.4354 15.8147 70.5092 9.63877 63.5256C3.4628 56.542 -0.00436513 47.0729 4.12453e-06 37.2015C0.00437338 27.3302 3.47992 17.865 9.66207 10.8884C15.8442 3.91173 24.2266 -0.00493104 32.9651 4.65925e-06C41.7036 0.00494036 50.0824 3.93107 56.2584 10.9147C62.4344 17.8983 65.9015 27.3674 65.8972 37.2388ZM66.8856 102.002H0.988461V335H66.8856V102.002ZM171.003 102.002H105.435V335H170.344V212.732C170.344 144.619 248.927 138.291 248.927 212.732V335H314V187.422C314 72.5979 197.692 76.8782 170.344 133.267L171.003 102.002Z" fill="var(--dark-navy)"/>
              </svg>
            </a>
          </li>
          <li>
            <a href="mailto:ileana.aguilar1000@gmail.com">
              <svg className="mail-icon" width="20" height="44" viewBox="0 0 355 279" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M35.5 279C25.7375 279 17.3832 275.588 10.437 268.764C3.49083 261.94 0.0118333 253.727 0 244.125V34.875C0 25.2844 3.479 17.0771 10.437 10.2532C17.395 3.42937 25.7493 0.011625 35.5 0H319.5C329.262 0 337.623 3.41775 344.581 10.2532C351.539 17.0887 355.012 25.296 355 34.875V244.125C355 253.716 351.527 261.929 344.581 268.764C337.635 275.6 329.274 279.012 319.5 279H35.5ZM177.5 156.937L35.5 69.75V244.125H319.5V69.75L177.5 156.937ZM177.5 122.062L319.5 34.875H35.5L177.5 122.062ZM35.5 69.75V34.875V244.125V69.75Z" fill="var(--dark-navy)"/>
              </svg>
            </a>
          </li>
        </ul>
      </div>

      <div className='scroll'>
        <svg width="36" height="36" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2.93105 10.8426L7.61605 6.23165C7.71827 6.13052 7.85626 6.07379 8.00005 6.07379C8.14384 6.07379 8.28183 6.13052 8.38405 6.23165L13.0691 10.8416C13.1719 10.9427 13.3103 10.9994 13.4546 10.9994C13.5988 10.9994 13.7372 10.9427 13.8401 10.8416C13.8907 10.7923 13.931 10.7333 13.9584 10.6681C13.9859 10.6029 14.0001 10.5329 14.0001 10.4621C14.0001 10.3914 13.9859 10.3214 13.9584 10.2562C13.931 10.191 13.8907 10.132 13.8401 10.0826L9.15605 5.47265C8.84753 5.16972 8.43243 5 8.00005 5C7.56768 5 7.15257 5.16972 6.84405 5.47265L2.16005 10.0826C2.10925 10.132 2.06887 10.1911 2.04129 10.2564C2.01372 10.3217 1.99951 10.3918 1.99951 10.4626C1.99951 10.5335 2.01372 10.6036 2.04129 10.6689C2.06887 10.7342 2.10925 10.7933 2.16005 10.8426C2.26291 10.9437 2.40135 11.0004 2.54555 11.0004C2.68976 11.0004 2.8282 10.9437 2.93105 10.8426Z" fill="#213547"/>
        </svg>
      </div>
    </section>
  );
};

export default Home;
