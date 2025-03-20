import React, { useRef, useState, useEffect, useCallback, useMemo } from 'react';
import Slider from "react-slick";
import { FaGithub, FaGlobe, FaPlay, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// Import slick carousel css
import styles from './styles.module.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousel = ({ customProjects = null }) => {
  const { siteConfig } = useDocusaurusContext();
  const [projects, setProjects] = useState([]);
  const sliderRef = useRef(null);
  const [atBeginning, setAtBeginning] = useState(true);
  const [atEnd, setAtEnd] = useState(false);
  const [slidesToShow, setSlidesToShow] = useState(3);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [totalPages, setTotalPages] = useState(1);

  // Optimize by memoizing the placeholder generator
  const createPlaceholders = useCallback((count, existingProjects) => {
    if (existingProjects.length === 0) return [];
    
    const placeholderData = {
      title: "Future Project",
      description: "Coming soon...",
      tags: ["planned"],
      image: "/img/project-blank.png"
    };

    // Use a more efficient array creation
    return [
      ...existingProjects,
      ...Array.from({ length: count }, (_, i) => ({
        ...placeholderData,
        id: `placeholder-${i}`
      }))
    ];
  }, []);

  // Get current slidesToShow based on screen width
  const getCurrentSlidesToShow = useCallback(() => {
    if (typeof window === 'undefined') return 3;
    
    const width = window.innerWidth;
    if (width <= 600) return 1;
    if (width <= 1024) return 2;
    return 3;
  }, []);
  
  const prepareProjects = useCallback((projectList, slides) => {
    if (!projectList?.length) return { projects: [], totalPages: 0 };
    
    // Sort projects - featured first
    const sortedProjects = [...projectList].sort((a, b) => 
      (a.featured ? -1 : 0) - (b.featured ? -1 : 0)
    );
    
    // Calculate placeholder needs
    const totalPages = Math.ceil(sortedProjects.length / slides);
    const totalNeeded = totalPages * slides;
    const placeholdersNeeded = totalNeeded - sortedProjects.length;
    
    // Return prepared data
    return {
      projects: placeholdersNeeded > 0 
        ? createPlaceholders(placeholdersNeeded, sortedProjects) 
        : sortedProjects,
      totalPages
    };
  }, [createPlaceholders]);

  // Load and set up projects on initial load and on resize
  useEffect(() => {
    const projectsToUse = customProjects || (siteConfig.customFields?.projects || []);
    
    const handleLayout = () => {
      const newSlidesToShow = getCurrentSlidesToShow();
      if (newSlidesToShow !== slidesToShow || !projects.length) {
        setSlidesToShow(newSlidesToShow);
        const { projects: newProjects, totalPages: newTotalPages } = 
          prepareProjects(projectsToUse, newSlidesToShow);
        
        setProjects(newProjects);
        setTotalPages(newTotalPages);
        setAtEnd(newProjects.length <= newSlidesToShow);
      }
    };

    // Initial setup
    handleLayout();
    
    // Resize handler
    window.addEventListener('resize', handleLayout);
    return () => window.removeEventListener('resize', handleLayout);
  }, [customProjects, siteConfig, getCurrentSlidesToShow, prepareProjects, slidesToShow, projects.length]);

  // Method to go to a specific slide
  const goToSlide = useCallback((index) => {
    if (sliderRef.current) {
      sliderRef.current.slickGoTo(index * slidesToShow);
    }
  }, [slidesToShow]);

  // Helper function for navigation dots
  const renderNavDots = useCallback(() => {
    return Array.from({ length: totalPages }, (_, i) => (
      <button
        key={i}
        className={`${styles.navDot} ${i === currentSlide ? styles.activeDot : ''}`}
        onClick={() => goToSlide(i)}
        aria-label={`Go to page ${i + 1}`}
        type="button"
      />
    ));
  }, [totalPages, currentSlide, goToSlide]);

  // Carousel settings
  const settings = useMemo(() => ({
    dots: false, // Disable built-in dots
    infinite: false,
    speed: 690,
    slidesToShow: Math.min(projects.length, slidesToShow),
    slidesToScroll: slidesToShow,
    autoplay: false,
    adaptiveHeight: false,
    centerPadding: '20px',
    centerMode: false,
    variableWidth: false,
    swipeToSlide: false,
    focusOnSelect: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: Math.min(projects.length, 2),
          slidesToScroll: 2,
          dots: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false,
        }
      }
    ],
    className: styles.projectsCarousel,
    beforeChange: (current, next) => {
      setAtBeginning(next === 0);
      setCurrentSlide(Math.floor(next / slidesToShow));
      setAtEnd(next + Math.min(projects.length, slidesToShow) >= projects.length);
    },
  }), [projects, slidesToShow]);

  // Navigation handlers
  const goToNext = useCallback(() => {
    if (!atEnd && sliderRef.current) {
      sliderRef.current.slickNext();
    }
  }, [atEnd]);

  const goToPrev = useCallback(() => {
    if (!atBeginning && sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  }, [atBeginning]);

  // Project link renderer
  const renderProjectLink = useCallback((url, Icon, label, ariaLabel) => {
    if (!url) return null;

    return (
      <a 
        href={url} 
        target="_blank" 
        rel="noopener noreferrer" 
        className={styles.projectLink}
        aria-label={ariaLabel}
      >
        <Icon />
        <span>{label}</span>
      </a>
    );
  }, []);

  if (projects.length === 0) {
    return (
      <div className={styles.noProjects}>
        <p>No projects to display.</p>
      </div>
    );
  }

  return (
    <div className={styles.carouselContainer}>
      <button 
        className={`${styles.carouselControl} ${styles.prevButton} ${atBeginning ? styles.disabledButton : ''}`} 
        onClick={goToPrev}
        aria-label="Previous project"
        type="button"
        disabled={atBeginning}
      >
        <FaChevronLeft />
      </button>
      
      <div className={styles.carouselWrapper}>
        <Slider ref={sliderRef} {...settings}>
          {projects.map((project, index) => (
            <div key={project.id || project.title + index} className={styles.carouselSlide}>
              <div className={`${styles.carouselCard} ${project.featured ? styles.featuredCard : ''}`}>
                {project.featured && (
                  <div className={styles.featuredBadge} title="Featured Project">
                    <FaStar />
                  </div>
                )}
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
                  
                  {project.tags?.length > 0 && (
                    <div className={styles.projectTags}>
                      {project.tags.map(tag => (
                        <span key={tag} className={styles.projectTag}>{tag}</span>
                      ))}
                    </div>
                  )}
                  <p className={styles.projectDescription}>{project.description}</p>
                </div>
                
                <div className={styles.projectLinks}>
                  {renderProjectLink(
                    project.website, 
                    FaGlobe, 
                    "Website", 
                    `Visit ${project.title} website`
                  )}
                  
                  {renderProjectLink(
                    project.github, 
                    FaGithub, 
                    "Source", 
                    `Repository with source code`
                  )}
                  
                  {renderProjectLink(
                    project.liveDemo, 
                    FaPlay, 
                    "Demo", 
                    `Live demo for ${project.title}`
                  )}
                </div>
              </div>
            </div>
          ))}
        </Slider>
        {totalPages > 1 && (
          <div className={styles.navDotsContainer}>
            {renderNavDots()}
          </div>
        )}
      </div>
      
      <button 
        className={`${styles.carouselControl} ${styles.nextButton} ${atEnd ? styles.disabledButton : ''}`} 
        onClick={goToNext}
        aria-label="Next project"
        type="button"
        disabled={atEnd}
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default React.memo(ProjectCarousel);
