import React, { useEffect } from 'react';
import './Experience.css';  
import { Link } from 'react-scroll';

const Experience = () => {
  const experiences = [
    {
      id: "headstarter",
      company: "Headstarter",
      title: "Software Engineer Program",
      dates: "July 2024 - September 2024",
      location: "Remote",
      description: [
        "- Developing and launching five AI projects, participating in hackathons, and aiming to acquire over 1,000 users for each project.",
        "- Collaborating with a diverse cohort and dedicating 20 hours weekly to programming and project development, enhancing teamwork and applying AI concepts in a remote, asynchronous environment."
      ],
      skills: ["React.js", "Html", "Css", "Node.js", "Next.js", "Python" ]
    },
    {
      id: "codepath",
      company: "CodePath",
      title: "Web 102 - Web Development Student",
      dates: "February 2024 - April 2024",
      location: "Remote",
      description: [
        "- Mastered full-stack development techniques, including crafting interactive frontends with React, handling complex user inputs, and establishing robust backend connections.",
        "- Completed a comprehensive Capstone Project, showcasing skills in dynamic data display, state management, and creating intuitive, user-centric interfaces."
      ],
      skills: ["React.js", "Html", "Css", "Node.js", "APIs", "Databases", "Vite" ]
    },
    {
      id: "bloomberg",
      company: "Bloomberg",
      title: "Data Analyst Program",
      dates: "October 2023 - January 2024",
      location: "Remote",
      description: [
        "- Selected for a competitive 10-week mentoring program, chosen among numerous applicants to meet bi-weekly with a Bloomberg Data Analyst, enhancing my data analysis capabilities and career insight",
        "- Improved MSSQL skills through hands-on practice with diverse public datasets, leading to a 30% increase in query efficiency and data processing speed."
      ],
      skills: ["Data Analysis", "Career Development"]
    },
    {
      id: "google",
      company: "Google",
      title: "Software Engineer Program (G-SWEP)",
      dates: "February 2023 - May 2023",
      location: "Remote",
      description: [
        "- Selected as 1 of 80 participants from over 350+ applicants for a 10-week intensive technical mentoring program.",
        "- Enhanced technical problem-solving skills in Python and Java, data structures and algorithms, achieving an improvement in interview readiness and career clarity through weekly challenges, workshops, and mentorship"
      ],
      skills: ["Java", "Python", "Data Structures" ]
    },
    {
      id: "queenscollege",
      company: "Queens College",
      title: "Tutor",
      dates: "January 2023 - June 2023",
      location: "Queens, NY",
      description: [
        "- Provided academic assistance to over 45+ students in Discrete Math and Algorithmic Problem Solving, leading to improved student performance and understanding",
        "- Facilitated effective learning by conducting 4 30-minute tutoring sessions 4 days a week and directing students to additional resources, achieving 75% improvement in academic success and resource utilization."
      ],
      skills: ["C++", "Java", "Html", "Css"]
    }
  ];

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2
    };

    const handleIntersect = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, options);
    const elements = document.querySelectorAll('.experience-heading, .experience, .item');
    
    elements.forEach(element => {
      observer.observe(element);
    });

    return () => {
      elements.forEach(element => {
        observer.unobserve(element);
      });
    };
  }, []);

  return (
    <section id="experience" className='experience-section'>
      <h2 className='experience-heading'>
        <svg width="54" height="37" viewBox="0 0 234 217" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M195 54.2507C200.655 54.2507 205.238 56.059 208.845 59.5852C212.55 63.2923 214.5 67.3611 214.5 72.334V171.792C214.5 176.765 212.55 180.834 208.845 184.541C205.238 188.067 200.655 189.876 195 189.876H39C33.345 189.876 28.7625 188.067 25.155 184.541C21.45 180.834 19.5 176.765 19.5 171.792V72.334C19.5 67.3611 21.45 63.2923 25.155 59.5852C28.7625 56.059 33.345 54.2507 39 54.2507H78V36.1673C78 30.9232 79.95 26.6736 83.655 23.3282C87.2625 19.8923 91.845 18.084 97.5 18.084H136.5C142.155 18.084 146.738 19.8923 150.345 23.3282C154.05 26.6736 156 30.9232 156 36.1673V54.2507H195ZM39 72.334V171.792H195V72.334H39ZM136.5 54.2507V36.1673H97.5V54.2507H136.5Z" fill="var(--purple)" />
        </svg>
        Experience
      </h2>
      <div className="experience0">
        <div className="experience">
          {experiences.map((experience) => (
            <div key={experience.id} id={experience.id} className="item">
              <h5 className="company-name">{experience.title} · {experience.company} </h5>
              <div className="job-info">
                <div className='date'>{experience.dates}</div>
              </div>
              <div>
                <ul className="fa-ul">
                  {experience.description.map((desc, index) => (
                    <li key={index}><i className="fa-li fa fa-hand-o-right"></i>{desc}</li>
                  ))}
                </ul>
              </div>
              {experience.skills && (
                <div className='skills-div'>
                  <ul className='skills'>
                    {experience.skills.map((skill, index) => (
                      <li key={index}>{skill}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
