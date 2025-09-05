import React, { useRef, useState, useEffect } from 'react';
import { ContentSection } from '../components/ContentSection';
import { CallToAction } from '../components/CallToAction';
import Headerfileupload from '../components/Headerfileupload';
import { contentData } from '../constants/contentData';
import LandingPage from '../components/LandingPage';
import EcoCompassGuide from '../components/EcoCompassGuide';
import Footer from '../components/Footer';
import BadgeInfoSection from '../components/BadgeInfoSection';

export const EcoCompass = () => {
  // Create refs for each section
  const landingPageRef = useRef(null);
  const contentSectionsRef = useRef({}); // Use an object to store refs dynamically
  const callToActionRef = useRef(null);
  const ecoCompassGuideRef = useRef(null);
  const footerRef = useRef(null);

  // State to track the current section
  const [currentSection, setCurrentSection] = useState(0);

  // Function to scroll to a specific section
  const scrollToSection = (index) => {
    const sectionKey = `section-${index}`;
    if (contentSectionsRef.current[sectionKey]) {
      contentSectionsRef.current[sectionKey].scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Scroll to the start of the section
        inline: 'nearest', // Align the section properly
      });
      setCurrentSection(index); // Update the current section index
    }
  };

  // Detect when the user has scrolled to a new section
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const sectionIndex = parseInt(entry.target.dataset.index, 10);
            setCurrentSection(sectionIndex);
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Trigger when 50% of the section is visible
      }
    );

    // Observe each content section
    Object.values(contentSectionsRef.current).forEach((section) => {
      observer.observe(section);
    });

    return () => {
      // Cleanup observer on component unmount
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <Headerfileupload />
      <div>
        <LandingPage ref={landingPageRef} />

        <div>
          {contentData.map((section, index) => (
            <ContentSection
              key={index}
              ref={(el) => contentSectionsRef.current[`section-${index}`] = el} // Use dynamic keys for refs
              image={section.image}
              title={section.title}
              description={section.description}
              imageFirst={section.imageFirst}
              data-index={index} // Add data-index to identify the section
            />
          ))}
          <CallToAction ref={callToActionRef} />
        </div>
        <BadgeInfoSection ref={BadgeInfoSection}/>
        <EcoCompassGuide ref={ecoCompassGuideRef} />
      </div>
      <Footer ref={footerRef} />
    </>
  );
};

const styles = {
  scrollButton: {
    position: 'fixed',
    bottom: '20px',
    left: '50%',
    transform: 'translateX(-50%)',
    padding: '10px 20px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};
