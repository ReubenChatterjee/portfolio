import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <motion.div 
      className="about-container"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div 
        className="section-title"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <h2>About Me</h2>
      </motion.div>
      
      <div className="about-content">
        <div className="about-flex">
          <motion.div 
            className="about-text"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="intro-text">
            I'm a passionate Data Scientist focused on transforming complex data into meaningful insights and impactful solutions.
            </p>
            
            <p>
            I am currently pursuing my Master's in Data Science from UC San Diego (GPA: 3.82), and graduate in June 2025. With my background in Computer Engineering, I bring a strong foundation in machine learning, statistical analysis, data visualization, Scalable Systems, and Frontend Development.
            </p>
            
            <p>
            My experience spans academia, research, and industry. As a Lead Teaching Assistant at UCSD, I've managed a 16-member TA team for an 840-student course, optimizing grading workflows using Python and Jupyter. As a Research Assistant, I've explored gender-based disparities in student skills through advanced statistical analysis using R-Studio and PostgreSQL-backed pipelines.
            </p>

            <p>At Datamatics Global Services, I developed scalable ETL pipelines and ML models (XGBoost, LightGBM) for demand forecasting on large datasets for the RAKEZ-UAE Government Project, improving accuracy by 15%.
            </p>
            
            <p>I love bridging technical depth with practical impact — whether it's building models that power smarter decisions, or designing tools that help teams move faster.</p>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <img src="/images/headshot.png" alt="Reuben Chatterjee" />
          </motion.div>
        </div>
          
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="section-subheading"
        >
          My Journey
        </motion.h3>
        
        <div className="timeline-container">
          <div className="timeline-content">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="timeline-text"
            >
              <p>I began my coding journey back in high school in 2017, starting with C and C++. But it was during my second year at the University of Mumbai (2020) that I truly found my footing in programming through Python, SQL, and Database Management Systems. Since then, Python has remained my go-to language for nearly everything — from scripting and automation to full-fledged machine learning pipelines.</p>
              <p>That same year, I joined a startup called The Learning Buddy as the 3D Design Lead, driven by a deep interest in computer graphics. I created AR/VR-ready assets and helped shape the 3D animation team. I'm especially proficient in <a href="https://www.behance.net/reubenchatterjee" target="_blank" rel="noopener noreferrer" className="inline-link">Blender</a>, and continue to explore design projects on the side.</p>
              <p>In my final undergraduate year, I was introduced to R — a tool I revisited more seriously later in grad school while working on a research study focused on gender disparities in data science education.</p>
              <p>In Fall 2023, I began my Master's in Data Science at UC San Diego, diving into courses like Statistical Models, Causal Inference, Scalable Systems, Deep Learning, and Fraud & Pricing Analytics. Alongside my studies, I worked part-time at the Halıcıoğlu Data Science Institute as a Social Media Analyst, where I turned engagement metrics into actionable insights to shape content strategy.</p>
              <p>That same year, I was appointed Teaching Assistant for COGS 108: Data Science in Practice — one of UCSD's largest undergraduate courses. I served as lead grader for 800+ students, wrote deployable Python scripts to improve grading efficiency, and mentored 22 project groups throughout the quarter.</p>
              <p>In Winter 2025, I was promoted to Lead TA, managing a team of 16 TAs and IAs while overseeing 25 student groups. During this time, I joined a concurrent research study being conducted on the course — one focused on identifying gender-based patterns in final projects. I'm currently the primary graduate student researcher for the study, leading the data analysis in R and shaping course improvement strategies.</p>
              <p>As of Spring 2025, I continue to serve as Lead TA, balancing teaching, mentorship, and research — and preparing to graduate this June.</p>
            </motion.div>
            
            <motion.div 
              className="timeline"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              {/* <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2017</div>
                <div className="timeline-content">
                  <h4>Started Coding Journey</h4>
                  <p>High school: C and C++</p>
                </div>
              </div> */}
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2019</div>
                <div className="timeline-content">
                  <h4>University of Mumbai</h4>
                  <p>BE in Computer Engineering</p>
                  <p>Python, SQL, DBMS, Machine Learning</p>
                  <p>3D Design Intern at The Learning Buddy</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">2023</div>
                <div className="timeline-content">
                  <h4>University of California San Diego</h4>
                  <p>Master's in Data Science</p>
                  <p>Social Media Analyst at HDSI</p>
                  <p>Data Science Intern at Datamatics Global Services</p>
                </div>
              </div>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-date">Present</div>
                <div className="timeline-content">
                  <h4>Lead Teaching Assistant for COGS108</h4>
                  <h4>Graduate student researcher for Gender study</h4>
                  <h4>Graduating in June 2025</h4>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="section-subheading"
        >
          What I Bring to the Table
        </motion.h3>
        <motion.div 
          className="strength-cards"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.4 }}
        >
          <div className="strength-card">
            <h4>Problem Solver</h4>
            <p>I enjoy solving real world problems using data, from building predictive models to automating entire workflows.</p>
          </div>
          <div className="strength-card">
            <h4>Creative Technologist</h4>
            <p>I blend analytical rigor with design thinking, from building ML pipelines to designing</p>
          </div>
          <div className="strength-card">
            <h4>Detail Oriented Leader</h4>
            <p>I pay close attention to the small details that make a big difference, and lead with empathy and precision, whether it's managing students or cross functional Teams.</p>
          </div>
          <div className="strength-card">
            <h4>Continuous Learner</h4>
            <p>I'm always diving into new tools, theories, and techniques, staying sharp across Python, R, SQL, and cloud platforms.</p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;