import React, { useEffect } from 'react';
import './Experience.css';  
import { Link } from 'react-scroll';

const Experience = () => {
  const experiences = [
    {
      id: "headstarter",
      company: "Headstarter",
      title: "Software Engineer Fellow",
      dates: "July 2024 - September 2024",
      location: "Remote",
      description: [
        "Developing and launching five AI projects, participating in hackathons, and aiming to acquire over 1,000 users for each project.",
        "Collaborating with a diverse cohort and dedicating 20 hours weekly to programming and project development, enhancing teamwork and applying AI concepts in a remote, asynchronous environment."
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
        "Mastered full-stack development techniques, including crafting interactive frontends with React, handling complex user inputs, and establishing robust backend connections.",
        "Completed a comprehensive Capstone Project, showcasing skills in dynamic data display, state management, and creating intuitive, user-centric interfaces."
      ],
      skills: ["React.js", "Html", "Css", "Node.js", "APIs", "Databases" ]
    },
    {
      id: "bloomberg",
      company: "Bloomberg",
      title: "Mentee",
      dates: "October 2023 - January 2024",
      location: "Remote",
      description: [
        "Enhanced my understanding of data analysis and career development by meeting bi-weekly with a Bloomberg Data Analyst, resulting in improved interview performance and career insight.",
        "Acquired practical interview skills and career guidance by engaging in mentoring sessions, leading to enhanced readiness for technical interviews and job market navigation."
      ],
      skills: ["Data Analysis", "Career Development"]
    },
    {
      id: "google",
      company: "Google",
      title: "Software Engineer Mentee",
      dates: "February 2023 - May 2023",
      location: "Remote",
      description: [
        "Developed critical software engineering skills by meeting weekly with a Google engineer for 10 weeks, resulting in a deeper understanding of industry practices and problem-solving techniques.",
        "Enhanced my technical and interview proficiency by completing 20 take-home assignments and training on technical interview questions, leading to improved performance in technical interviews."
      ],
      skills: ["Java", "Data Structures" ]
    },
    {
      id: "queenscollege",
      company: "Queens College",
      title: "Tutor",
      dates: "January 2023 - June 2023",
      location: "Queens, NY",
      description: [
        "Provided academic assistance to over 45 students in Discrete Math and Algorithmic Problem Solving, leading to improved student performance and understanding.",
        "Facilitated effective learning by conducting 4 30-minute tutoring sessions 4 days a week and directing students to additional resources, resulting in enhanced academic success and resource utilization."
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
