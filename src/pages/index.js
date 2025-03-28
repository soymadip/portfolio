import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import UpdateTitle from '@site/src/utils/updateTitle';

// Import components
import HeroSection from "@site/src/components/HeroSection";
import AboutSection from "@site/src/components/AboutSection";
import ProjectsSection from "@site/src/components/ProjectsSection";
import ContactSection from "@site/src/components/ContactSection";
import ExperienceSection from "@site/src/components/ExperienceSection";
import ScrollToTop from "@site/src/components/ScrollToTop";


export default function Home() {
  const { siteConfig } = useDocusaurusContext();

  const sectionTitles = {
    'me':          `Home | ${siteConfig.title}`,
    'about':       `About Me | ${siteConfig.title}`,
    'projects':    `Projects | ${siteConfig.title}`,
    'experience':  `Experience | ${siteConfig.title}`,
    'contact':     `Contact | ${siteConfig.title}`
  };
  
  const customStyles = `
  /* For future */
  `;


  return (
    <Layout 
      title="Me"
      description="My portfolio website"
    >
      {/* Custom styles */}
      <style>{customStyles}</style>
      
      <UpdateTitle
        sections={sectionTitles}
        defaultTitle={siteConfig.title}
      />

      <main>

        {/* Hero Section */}
        <HeroSection
          id="me"
        />

        {/* About Section */}
        <AboutSection 
          id="about"
          title="About Me"
        />

        {/* Projects Section */}
        <ProjectsSection
          id="projects"
          title="My Projects"
          subtitle="A collection of all my works, with featured projects highlighted"
        />

        {/* Experience Section */}
        <ExperienceSection
          id="experience"
          title="Experience"
          subtitle="My professional journey and work experience"
        />

        {/* Contact Section */}
        <ContactSection
          id="contact"
          title="Get In Touch"
          subtitle="Feel free to reach out for collaborations, questions, or just to say hello!"
        />

        {/* Scroll to top button */}
        <ScrollToTop
          hideDelay={3500}
        />
      </main>
    </Layout>
  );
}
