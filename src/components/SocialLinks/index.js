import React, { useState, useEffect } from 'react';
import styles from './styles.module.css';
import { FaQuestionCircle } from 'react-icons/fa';

import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useIsBrowser from '@docusaurus/useIsBrowser';

import Tooltip from '@site/src/components/Tooltip';
import { iconMap } from '@site/src/data/iconMappings';


// Default icon & icon
const DEFAULT_ICON = FaQuestionCircle;
const DEFAULT_COLOR = 'var(--ifm-color-primary)';


export default function SocialIcons({ showAll = false }) {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  const isBrowser = useIsBrowser();

  const [animationDelays, setAnimationDelays] = useState({});

  const allSocialLinks = customFields.socialLinks || [];
  const socialLinks = showAll 
    ? allSocialLinks 
    : allSocialLinks.filter(link => link.pin);

  useEffect(() => {
    if (isBrowser) {
      const isTablet = window.innerWidth <= 768;
      const isMobile = window.innerWidth <= 480;
      const delays = {};

      socialLinks.forEach((_, index) => {
        let baseDelay;
        let incrementDelay;
        
        if (isMobile) {
          baseDelay = 0.7;
          incrementDelay = 0.1;

        } else if (isTablet) {
          baseDelay = 0.9;
          incrementDelay = 0.1;

        } else {
          baseDelay = 1.3;
          incrementDelay = 0.1;
        }
        
        delays[index] = `${baseDelay + (index * incrementDelay)}s`;
      });

      setAnimationDelays(delays);

      const handleResize = () => {
        const isTablet = window.innerWidth <= 768;
        const isMobile = window.innerWidth <= 480;
        const newDelays = {};

        socialLinks.forEach((_, index) => {
          let startDelay;
          let incrementDelay = 0.1;
          
          if (isMobile) {
            startDelay = 0.7;
          } else if (isTablet) {
            startDelay = 0.9;
          } else {
            startDelay = 1.3;
          }
          
          newDelays[index] = `${startDelay + (index * incrementDelay)}s`;
        });

        setAnimationDelays(newDelays);
      };

      window.addEventListener('resize', handleResize);

      return () => window.removeEventListener('resize', handleResize);
    }
  }, [isBrowser, socialLinks]);


  // Get icon component and color
  const getIconDetails = (iconName) => {

    if (!iconName) {
      return {
        icon: DEFAULT_ICON,
        color: DEFAULT_COLOR
      };
    }

    const formattedIconName = iconName.toLowerCase();
    const iconDetails = iconMap[formattedIconName];

    if (!iconDetails) {
      return {
        icon: DEFAULT_ICON,
        color: DEFAULT_COLOR
      };
    }

    return {
      icon: iconDetails.icon,
      color: iconDetails.color || DEFAULT_COLOR
    };
  };
  
  if (socialLinks.length === 0) {
    return null;
  }
  
  return (
    <div className={styles.socialIcons}>
      {
        socialLinks.map((social, index) => {
          const { icon: IconComponent, color: iconColor } = getIconDetails(social.icon);
          const href = social.url || '#';
          const displayColor = social.color || iconColor;

          return (
            <Tooltip
              key={index}
              content={social.desc || social.icon || 'Link'}
              position="top"
              color={displayColor}
            >
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                style={{
                  '--hover-color': displayColor,
                  animationDelay: animationDelays[index] || '0s'
                }}
                aria-label={social.icon || 'social link'}
              >
                <IconComponent size={24} />
              </a>
            </Tooltip>
          );
      })}
    </div>
  );
}
