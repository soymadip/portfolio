import React, { useEffect, useState, forwardRef, useImperativeHandle } from 'react';
import ProjectCard from '@site/src/components/ProjectCard';
import { FaTimes } from 'react-icons/fa';
import styles from './styles.module.css';

// AI generated. 

const ProjectDrawer = forwardRef((props, ref) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  
  // Expose open and close methods to parent component
  useImperativeHandle(ref, () => ({
    open,
    close
  }));

  // Quit on escape key press
  useEffect(() => {
    const escapeQuit = (e) => {
      if (isOpen && e.key === 'Escape') {
        close();
      }
    };
    
    document.addEventListener('keydown', escapeQuit);
    return () => document.removeEventListener('keydown', escapeQuit);
  }, [isOpen]);

  // Body scroll lock 
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);
  
  return (
    <>
      <div 
        className={`${styles.drawerOverlay} ${isOpen ? styles.open : ''}`}
        onClick={close}
      />
      <div className={`${styles.projectsDrawer} ${isOpen ? styles.open : ''}`}>
        <div className={styles.drawerHeader}>
          <h3>More Projects</h3>
          <button 
            className={styles.drawerCloseButton} 
            onClick={close}
            aria-label="Close drawer"
          >
            <FaTimes />
          </button>
        </div>
        <div className={styles.drawerIntro}>
          <p className={styles.drawerSubtitle}>
            Some of my other projects that I've worked on
          </p>
        </div>
        <div className={styles.drawerContent}>
          <ProjectCard showNonFeaturedOnly={true} inDrawer={true} />
          
          <div className={styles.drawerFooter}>
            <button 
              onClick={close}
              className={styles.drawerCloseButtonBottom}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
});

export default ProjectDrawer;
