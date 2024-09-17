import React, { useEffect } from 'react';
import './About.css';  
import MyPic from '../assets/DSC_4139_Original.jpg'; 

const About = () => {

  useEffect(() => {
    const options = {
      threshold: 0.2 
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    }, options);

    const aboutDiv = document.querySelector('.about-div');
    const aboutInfo = document.querySelector('.about-info');
    const aboutPic = document.querySelector('.about-me-pic');

    if (aboutDiv) observer.observe(aboutDiv);
    if (aboutInfo) observer.observe(aboutInfo);
    if (aboutPic) observer.observe(aboutPic);

    return () => {
      if (aboutDiv) observer.unobserve(aboutDiv);
      if (aboutInfo) observer.unobserve(aboutInfo);
      if (aboutPic) observer.unobserve(aboutPic);
    };
  }, []);

  return (
    <section id="about" className="about-section">
      <div className="about-div0">
        <div className='about-div'>
          <h1 className='heading'>
            <svg width="40" height="40" viewBox="0 0 303 301" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M151.5 136.501C137.612 136.501 125.724 131.132 115.834 120.393C105.945 109.655 101 96.7465 101 81.6673C101 66.5882 105.945 53.6795 115.834 42.9413C125.724 32.2031 137.612 26.834 151.5 26.834C165.388 26.834 177.276 32.2031 187.166 42.9413C197.055 53.6795 202 66.5882 202 81.6673C202 96.7465 197.055 109.655 187.166 120.393C177.276 131.132 165.388 136.501 151.5 136.501ZM50.5 246.167V207.784C50.5 200.016 52.3433 192.878 56.0298 186.372C59.7163 179.865 64.6063 174.893 70.7 171.457C83.7458 164.374 97.0021 159.065 110.469 155.528C123.935 151.991 137.612 150.218 151.5 150.209C165.388 150.2 179.065 151.973 192.531 155.528C205.998 159.083 219.254 164.393 232.3 171.457C238.402 174.884 243.296 179.856 246.983 186.372C250.669 192.888 252.508 200.025 252.5 207.784V246.167H50.5ZM75.75 218.751H227.25V207.784C227.25 205.271 226.673 202.986 225.52 200.93C224.367 198.874 222.84 197.274 220.938 196.132C209.575 189.963 198.107 185.339 186.534 182.259C174.961 179.179 163.283 177.635 151.5 177.626C139.717 177.617 128.039 179.161 116.466 182.259C104.893 185.357 93.425 189.981 82.0625 196.132C80.1687 197.274 78.6411 198.874 77.4796 200.93C76.3181 202.986 75.7416 205.271 75.75 207.784V218.751ZM151.5 109.084C158.444 109.084 164.39 106.402 169.339 101.037C174.288 95.6727 176.758 89.216 176.75 81.6673C176.742 74.1186 174.271 67.6665 169.339 62.3112C164.407 56.9558 158.461 54.2689 151.5 54.2507C144.539 54.2324 138.597 56.9192 133.674 62.3112C128.75 67.7031 126.275 74.1552 126.25 81.6673C126.225 89.1795 128.699 95.6361 133.674 101.037C138.648 106.438 144.59 109.121 151.5 109.084Z" fill="var(--purple)" />
            </svg>About
          </h1>
        </div>
        <div className='about-me-div'>
          <div className='about-info'>
            <p>Hello! My name is Ileana and I enjoy creating things with code.</p>
            <p>
              My fascination with technology started at a young age, initially sparked by customizing my Tumblr blog back in 2011. 
              This interest grew into a passion for understanding how technology operates behind the scenes.
              This passion led me to pursue a Computer Science degree at Queens College.
            </p>
            <p>My academic journey is complemented by hands-on experience with languages and frameworks such as Java, C++, Python, React, and more. I also had the privillage to be apart of mentorship programs at Bloomberg and Google.</p>
            <p>My <a>mentorship experiences at Bloomberg and Google</a>, along with <a>tutoring at Queens College</a>, have not only enhanced my technical skills but also sharpened my ability to communicate complex ideas in a clear and effective manner.</p>
            <p>With a solid foundation in both front-end and back-end development, I am eager to bring my skills to a dynamic team where I can contribute to impactful projects and continue to grow as a developer as shown with my initiative for continuious learning.</p>
          </div>
          <div className='about-me-pic'>
            <img src={MyPic} className='profile-pic' alt='Ileana Aguilar' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
