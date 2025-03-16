import React, { useRef } from "react";
import Layout from "@theme/Layout";
import styles from "./css/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Import components
import ProjectCard from "@site/src/components/ProjectCard";
import SocialLinks from "@site/src/components/SocialLinks";
import SocialCard from "@site/src/components/SocialCard";

// Import icon
import { FaAddressCard } from "react-icons/fa";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const profilePic = customFields.profilePic;
  
  const updateTitle = () => {
    document.title = `Projects | ${siteConfig.title}`;
  };

  return (
    <Layout title="Me" description="My portfolio website">
      <main>
        <div className={styles.hero}>
          <div className={styles.container}>
            <div className={styles.leftSection}>
              <p className={styles.intro}>Hello there, I'm</p>
              <h1 className={styles.name}>
                Soumadip Das
                <span className={styles.nameComma}>,</span>
              </h1>
              <div className={styles.subtitleWrapper}>
                <span className={styles.subtitlePrefix}>I am a</span>
                <h2 className={styles.subtitle}>FOSS Developer</h2>
                <span className={styles.subtitlePrefix}>.</span>
              </div>
              <p className={styles.description}>
                I tend to make solutions of real-life problems, that helps to make
                life less painful.
              </p>
              <div className={styles.actionRow}>
                <div className={styles.cta}>
                  <a 
                    href="#featured-projects" 
                    className={styles.ctaButton}
                    onClick={updateTitle}
                  >
                    View My Work
                  </a>
                </div>
                <SocialLinks />
              </div>
            </div>
            <div className={styles.rightSection}>
              <img
                src={`${profilePic}`}
                alt="profile"
                className={styles.profilePic}
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div 
          id="featured-projects" 
          className={styles.featuredProjects}
          ref={projectsRef}
        >
          <ProjectCard homePage={true} />
        </div>
        <div 
          id="contact"
          className={styles.contactSection}
          ref={contactRef}
        >
          <div className={styles.contactSectionHeader}>
            <h2 className={styles.contactTitle}>Get In Touch</h2>
            <p className={styles.contactSubtitle}>
              Feel free to reach out for collaborations, questions, or just to say hello!
            </p>
          </div>
          <SocialCard />
        </div>
      </main>
    </Layout>
  );
}
