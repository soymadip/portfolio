import React from 'react';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import { FaGithub, FaGlobe, FaPlay } from 'react-icons/fa';

export default function ProjectCard({ showFeaturedOnly = false, showNonFeaturedOnly = false, showAll = false, inDrawer = false }) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  
  let projects = customFields.projects || [];
  
  if (showFeaturedOnly) {
    projects = projects.filter(project => project.featured);
  } else if (showNonFeaturedOnly) {
    projects = projects.filter(project => !project.featured);
  } else if (!showAll) {
    projects = projects.slice(0, 6);
  }

  if (projects.length === 0) {
    return (
      <div className={styles.noProjects}>
        <p>No projects to display.</p>
      </div>
    );
  }

  const wrapperClass = inDrawer ? styles.drawerGridWrapper : styles.gridWrapper;
  const gridClass = inDrawer ? styles.drawerProjectsGrid : styles.projectsGrid;

  return (
    <div className={wrapperClass}>
      <div className={gridClass}>
        {projects.map((project, index) => (
          <div 
            key={project.title} 
            className={`${styles.projectCard} ${inDrawer ? styles.drawerCard : ''}`}
            style={{ '--card-index': index }}
          >
            <div className={styles.projectImageContainer}>
              {project.image && (
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className={styles.projectImage} 
                  loading="lazy"
                />
              )}
            </div>
            <div className={styles.projectContent}>
              <h3 className={styles.projectTitle}>{project.title}</h3>
              <p className={styles.projectDescription}>{project.description}</p>
              
              {project.tags && project.tags.length > 0 && (
                <div className={styles.projectTags}>
                  {project.tags.map(tag => (
                    <span key={tag} className={styles.projectTag}>{tag}</span>
                  ))}
                </div>
              )}
            </div>
            
            <div className={styles.projectLinks}>
              {project.website && (
                <a 
                  href={project.website} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                  aria-label={`Visit ${project.title} website`}
                >
                  <FaGlobe />
                  <span>Website</span>
                </a>
              )}
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                  aria-label={`GitHub repository for ${project.title}`}
                >
                  <FaGithub />
                  <span>GitHub</span>
                </a>
              )}
              {project.liveDemo && (
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className={styles.projectLink}
                  aria-label={`Live demo for ${project.title}`}
                >
                  <FaPlay />
                  <span>Demo</span>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
