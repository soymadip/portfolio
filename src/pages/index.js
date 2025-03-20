import React from "react";
import Layout from "@theme/Layout";
import styles from "./css/index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Import components
import UpdateTitle from '@site/src/components/UpdateTitle';
import ProjectCarousel from "@site/src/components/ProjectCarousel";
import SocialLinks from "@site/src/components/SocialLinks";
import SocialCard from "@site/src/components/SocialCard";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const profilePic = customFields.profilePic;

  const sectionTitles = {
    'me':                `Home | ${siteConfig.title}`,
    'about':             `About Me | ${siteConfig.title}`,
    'featured-projects': `Projects | ${siteConfig.title}`,
    'experience':        `Experience | ${siteConfig.title}`,
    'contact':           `Contact | ${siteConfig.title}`
  };

  return (
    <Layout 
      title="Me"
      description="My portfolio website"
    >
      <UpdateTitle
        sections={sectionTitles}
        defaultTitle={siteConfig.title}
      />

      <main>
        <div className={styles.hero} id="me">
          <div className={styles.container}>
            <div className={styles.leftSection}>
              <p className={styles.intro}>Hello there, I'm</p>
              <h1 className={styles.title}>
                Soumadip Das
                <span className={styles.titleComma}>,</span>
              </h1>
              <div className={styles.subtitleWrapper}>
                <span className={styles.subtitlePrefix}>I am a</span>
                <h2 className={styles.subtitle}>FOSS Developer</h2>
                <span className={styles.subtitlePrefix}>.</span>
              </div>
              <p className={styles.description}>
                I tend to make solutions of real-life problems, that helps to make life less painful.
              </p>
              <div className={styles.actionRow}>
                <div className={styles.cta}>
                  <a 
                    href="#featured-projects" 
                    className={styles.ctaButton}
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
        >
          <div className={styles.projectsContainer}>
            <div className={styles.projectsHeader}>
              <h2 className={styles.projectsTitle}>My Projects</h2>
              <p className={styles.projectsSubtitle}>
                A collection of all my works, with featured projects highlighted
              </p>
            </div>
            <ProjectCarousel />
          </div>
        </div>
        <div 
          id="contact"
          className={styles.contactSection}
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
