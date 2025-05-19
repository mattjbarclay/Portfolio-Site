import React from 'react';
import { motion } from 'framer-motion';
import './Resume.css';

function Resume() {
  const experiences = [
    {
      title: "Software Developer",
      company: "Company Name",
      period: "2022 - Present",
      description: "Description of your role and achievements",
      skills: ["React", "Node.js", "TypeScript"]
    },
    // Add more experiences here
  ];

  const skills = [
    { category: "Frontend", items: ["React", "JavaScript", "HTML", "CSS", "TypeScript"] },
    { category: "Backend", items: ["Node.js", "Python", "SQL", "MongoDB"] },
    { category: "Tools", items: ["Git", "Docker", "AWS", "VS Code"] }
  ];

  return (
    <motion.div 
      className="resume"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="resume-container">
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="resume-title"
        >
          Resume & Experience
        </motion.h1>

        <section className="experience-section">
          <h2>Work Experience</h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="timeline-item"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <div className="timeline-content">
                  <h3>{exp.title}</h3>
                  <h4>{exp.company}</h4>
                  <p className="period">{exp.period}</p>
                  <p>{exp.description}</p>
                  <div className="skills-tags">
                    {exp.skills.map((skill, i) => (
                      <span key={i} className="skill-tag">{skill}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <section className="skills-section">
          <h2>Skills & Expertise</h2>
          <div className="skills-grid">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                className="skill-group"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.2 }}
              >
                <h3>{skillGroup.category}</h3>
                <div className="skills-list">
                  {skillGroup.items.map((skill, i) => (
                    <span key={i} className="skill-item">{skill}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </section>

        <motion.a
          href="/resume.pdf"
          className="download-resume"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Download Full Resume
        </motion.a>
      </div>
    </motion.div>
  );
}

export default Resume; 