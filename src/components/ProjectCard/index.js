import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from "./styles.module.css";

import { FaGithub, FaGlobe } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

// Filter out empty tags
const isValidTag = (tag) => typeof tag === "string" && tag.trim() !== "";

export default function ProjectCard({ showAll = false, homePage = false }) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const projects = customFields.projects || [];

  // Filter based on showAll flag
  const projectsToShow = showAll
    ? projects
    : projects.filter((project) => project.featured);

  return (
    <section
      className={`${styles.projectsSection} ${homePage ? styles.homepage : ""}`}
    >
      <div className={styles.projectsContainer}>
        <h2 className={styles.sectionTitle}>
          {showAll ? "All Projects" : "Featured Projects"}
        </h2>
        <p className={styles.sectionSubtitle}>
          {showAll
            ? "A comprehensive collection of my work"
            : "Some of my recent work that I'm proud of"}
        </p>

        <div className={styles.projectsGrid}>
          {projectsToShow.map((project, index) => (
            <div key={index} className={styles.projectCard}>
              {project.image && (
                <div className={styles.projectImageContainer}>
                  <img
                    src={project.image}
                    alt={project.title || "Project image"}
                    className={styles.projectImage}
                    loading="lazy"
                  />
                </div>
              )}
              <div className={styles.projectContent}>
                {project.title && (
                  <h3 className={styles.projectTitle}>{project.title}</h3>
                )}
                {project.tags &&
                  Array.isArray(project.tags) &&
                  project.tags.some(isValidTag) && (
                    <div className={styles.projectTags}>
                      {project.tags.filter(isValidTag).map((tag, tagIndex) => (
                        <span key={tagIndex} className={styles.projectTag}>
                          {tag.trim()}
                        </span>
                      ))}
                    </div>
                  )}
                {project.description && (
                  <p className={styles.projectDescription}>
                    {project.description}
                  </p>
                )}
                <div className={styles.projectLinks}>
                  {project.website && (
                    <a
                      href={project.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FaGlobe /> Website
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FaGithub /> Source
                    </a>
                  )}
                  {project.liveDemo && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.projectLink}
                    >
                      <FiExternalLink /> Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {!showAll && projectsToShow.length < projects.length && (
          <div className={styles.viewAllContainer}>
            <a href="/projects" className={styles.viewAllButton}>
              View All Projects
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
