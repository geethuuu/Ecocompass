import React from 'react';
import { StepCard } from './StepCard';
import styles from '../styles/EcoCompassGuide.module.css';
import { Link } from "react-router-dom";
const steps = [
  {
    title: 'Step 1: Create Your Account',
    description: 'Sign up on our platform to get started.'
  },
  {
    title: 'Step 2: Upload Your ESG Report',
    description: 'Easily upload your ESG report for analysis.'
  },
  {
    title: 'Step 3: Analyze Your Results',
    description: 'Review your ESG score and performance insights.'
  }
];

const EcoCompassGuide = () => {
  return (
    <div className={styles.gcontainer}>
      <h1 className={styles.gtitle}>Your Guide to EcoCompass Reporting</h1>
      <p className={styles.gsubtitle}>
        EcoCompass simplifies the process of ESG reporting. Follow these steps
        to submit your report and gain valuable insights.
      </p>
      <div className={styles.gstepsContainer}>
        <div className={styles.gstepsGrid}>
          {steps.map((step, index) => (
            <div key={index} className={styles.gcolumn}>
              <StepCard title={step.title} description={step.description} />
            </div>
          ))}
        </div>

      </div>
      <div className={styles.buttonWrapper}>
      <Link to="/signup">

      <button className={styles.glearnMoreButton} tabIndex="0">
        Sign Up
      </button>
      </Link>
      </div>
    </div>
  );
};

export default EcoCompassGuide;
