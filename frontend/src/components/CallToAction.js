import React from 'react';
import styles from '../styles/EcoCompass.module.css';
import { Link } from "react-router-dom";
export const CallToAction = () => {
  const handleGetStarted = () => {
    window.location.href = '/stepcard';
  };

  return (
    <section className={styles.secctaSection}>
      <div className={styles.secctaContent}>
        <h2 className={styles.secctaHeading}>About ESG Scoring</h2>
        <p className={styles.secctaText}>
          EcoCompass simplifies sustainability evaluation by analyzing your
          Environmental, Social, and Governance (ESG) performance. Upload your 
          sustainability report today to receive a comprehensive ESG score, 
          benchmarked against industry standards and take the first step toward 
          driving meaningful change and showcasing your dedication to a sustainable future!
        </p>
        <Link to="/stepcard">

        <button 
          className={styles.secctaButton}
          onClick={handleGetStarted}
          aria-label="Get started with EcoCompass ESG scoring"
        >
          Get started
        </button>
        </Link>
      </div>
    </section>
  );
};