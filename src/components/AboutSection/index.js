import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';

export default function AboutSection({ id, className, title }) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const aboutMe = customFields.aboutMe || {};

  return (
    <div id={id} className={`${styles.aboutSection} ${className || ''}`}>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutHeader}>
          <h2 className={styles.aboutTitle}>{title || aboutMe.title || "About Me"}</h2>
          {aboutMe.subtitle && (
            <p className={styles.aboutSubtitle}>
              {aboutMe.subtitle}
            </p>
          )}
        </div>
        
        <div className={styles.aboutContent}>
          {aboutMe.image && (
            <div className={styles.aboutImageContainer}>
              <div className={styles.imageFrame}>
                <img 
                  src={aboutMe.image} 
                  alt="About Me" 
                  className={styles.aboutImage}
                  loading="lazy"
                />
              </div>
            </div>
          )}
          
          <div className={styles.aboutTextContent}>
            <div className={styles.aboutDescription}>
              {Array.isArray(aboutMe.description) ? (
                aboutMe.description.map((paragraph, index) => (
                  <p key={index} className={styles.aboutParagraph}>{paragraph}</p>
                ))
              ) : (
                <p className={styles.aboutParagraph}>
                  {aboutMe.description || "Information about me goes here."}
                </p>
              )}
              
              {aboutMe.resumeLink && (
                <div className={styles.resumeButtonWrapper}>
                  <a 
                    href={aboutMe.resumeLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className={styles.resumeButton}
                  >
                    View My Resume
                  </a>
                </div>
              )}
            </div>
            
            {aboutMe.skills && aboutMe.skills.length > 0 && (
              <div className={styles.skillsSection}>
                <h3 className={styles.skillsTitle}>My Skills</h3>
                <div className={styles.skillsGrid}>
                  {aboutMe.skills.map((skill, index) => (
                    <div key={index} className={styles.skillBadge}>
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
