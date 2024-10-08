import React from 'react';
import './Work.css'; 
import Project from './Project';

import TravelEaseImg from '../assets/TravelEase.png';
import JdbcImg from '../assets/jdbc.png';
import ContactBookImg from '../assets/contackbook.png';
import FlashcardsImg from '../assets/flashcards.png';
import QuizinImg from '../assets/quizin.png';
import PantryAppImg from '../assets/pantryapp.png';

const Work = () => {

  const projects = [
    {
      name: "Travel Ease",  
      image: TravelEaseImg,
      description: "A React-based web application designed to help users share and manage their travel itineraries. The platform includes user authentication, post creation, updates, deletion, an interactive home feed with various features for enhanced user interaction and AI generated itneraries.",
      techstack: ["React.js", "Node.js", "Supabase API", "Open AI API"],
      githuburl: "https://github.com/ileana-aguilar/TravelEaseAI",
      websiteurl: "https://travelease1.netlify.app"
    },
    {
      name: "Quizin",  
      image: QuizinImg,
      description: "A full-stack React-based web application that allows users to generate and save custom flashcard sets. The platform includes user authentication, subscription management, and AI-powered flashcard generation, with features tailored for educational use.",
      techstack: ["React.js", "Node.js", "Next.js", "Firebase API", "Open AI API", "Stripe API", "Clerk API", "Google Analytics"],
      githuburl: "https://github.com/ileana-aguilar/flashcard-saas",
      websiteurl: "https://quizin1.vercel.app"
    },
    {
      name: "Pantry App", 
      description: "Pantry App is an AI-powered recipe suggestion platform that helps users manage their pantry items and generate recipes based on available ingredients. The app utilizes the OpenAI API and GPT Vision API to analyze pantry contents and provide custom recipe suggestions.",
      techstack: ["React.js", "Node.js", "Next.js", "Firebase API", "Open AI API", "Google Analytics", "GPT Vision API"],
      image: PantryAppImg,
      githuburl: "https://github.com/ileana-aguilar/pantryapp",
    },
    { 
      name: "ERD-Based Academic Management Application",
      description: "A Java program that integrates SQL and Java to manage and visualize academic scheduling data. It involves designing a database, implementing SQL procedures, and developing a Java application to execute these procedures and display the results using Java Swing's JTable.",  
      techstack: ["Java", "Microsoft SQL Server", "JDBC", "Docker", "Azure Data Studio"],
      image: JdbcImg,
      githuburl: "https://github.com/ileana-aguilar/jdbcSqlProject",
    },
    {
      name: "Contact Book Program ", 
      description: "A simple yet robust C++ program designed to manage contact information systematically. The application allows users to store, modify, and retrieve contact details such as names, phone numbers, and addresses.",
      techstack: ["C++"],
      image: ContactBookImg,
      githuburl: "https://github.com/ileana-aguilar/contactBook",
    },
    {
      name: "Flashcard Study App", 
      description: "A React-based web application designed to help users study and memorize information using flashcards. Users can then use to study, learn something new, or play a guessing game.",
      techstack: ["React", "JavaScript", "Node.js"],
      image: FlashcardsImg,
      githuburl: "https://github.com/ileana-aguilar/FlashcardsPt2",
    }
  ];

  return (
    <section id="work" className='work-section'>
      <div className='work-title'>
      <svg width="78" height="49" viewBox="0 0 248 219" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M41.3332 182.5C35.6498 182.5 30.7863 180.715 26.7425 177.144C22.6987 173.573 20.6734 169.275 20.6665 164.25V54.75C20.6665 49.7312 22.6918 45.4364 26.7425 41.8655C30.7932 38.2946 35.6567 36.5061 41.3332 36.5H103.333L124 54.75H206.666C212.35 54.75 217.217 56.5385 221.267 60.1155C225.318 63.6925 227.34 67.9873 227.333 73V164.25C227.333 169.269 225.311 173.567 221.267 177.144C217.224 180.721 212.357 182.506 206.666 182.5H41.3332ZM41.3332 164.25H206.666V73H115.475L94.8082 54.75H41.3332V164.25Z" fill="var(--purple)" />
            </svg>
            
            <div className='marquee-container'>
            <div className='marquee'>
              <div className='marquee-content'>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              <h1>Featured Work</h1>
              </div>
            </div>
        </div>
        
      </div>

      <div className='ListOfProjects'>
        {
          projects.map((project, index) => (
            <Project
              key={index} 
              img={project.img}
              name={project.name} 
              description={project.description}
              techstack={project.techstack}
              image={project.image}
              githuburl={project.githuburl}
              websiteurl={project.websiteurl}
            />
          ))
        }
      </div>
      <div className='more-projects'>
        <a href="https://github.com/ileana-aguilar?tab=repositories" className='more-projects-button'>View More Projects</a>
         </div>
    </section>
  );
};

export default Work;