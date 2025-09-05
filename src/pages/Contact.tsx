import React from 'react';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function Contact() {
  return (
    <motion.div 
      className="contact-container"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h2 variants={itemVariants}>Contact</motion.h2>

      <motion.div className="contact-info" variants={itemVariants}>
        <h3>Email</h3>
        <p>
          <a href="mailto:kensei.mine21@gmail.com" className="contact-link">
            kensei.mine21@gmail.com
          </a>
        </p>
      </motion.div>

      <motion.div className="contact-info" variants={itemVariants}>
        <h3>SNS</h3>
        <ul className="social-links">
          <li>
            <a href="https://github.com/kensei-yu" target="_blank" rel="noopener noreferrer" className="contact-link">
              GitHub
            </a>
          </li>
          {/* 必要に応じて他のSNSを追加 */}
        </ul>
      </motion.div>

      <motion.div className="contact-form" variants={itemVariants}>
        <h3>Message Form</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5}></textarea>
          </div>
          <button type="submit" className="submit-button">Send</button>
        </form>
      </motion.div>
    </motion.div>
  );
}

export default Contact;