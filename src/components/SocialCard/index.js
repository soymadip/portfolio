import React from "react";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

import { iconMap } from "@site/src/data/iconMappings";
import { FaQuestionCircle } from "react-icons/fa";
import styles from "./styles.module.css";

const sortEmail = (links) => {
  return [...links].sort((a, b) => {

    const isEmailA = a.url?.startsWith('mailto:') || 
                    a.icon?.toLowerCase().includes('email') || 
                    a.name?.toLowerCase().includes('email');

    const isEmailB = b.url?.startsWith('mailto:') || 
                    b.icon?.toLowerCase().includes('email') || 
                    b.name?.toLowerCase().includes('email');

    if (isEmailA && !isEmailB) return -1;
    if (!isEmailA && isEmailB) return 1;

    return 0;
  });
};

export default function SocialCard() {
  const { siteConfig } = useDocusaurusContext();
  const { customFields } = siteConfig;
  let socialLinks = customFields.socialLinks || [];
  
  socialLinks = sortEmail(socialLinks);

  return (
    <div className={styles.gridWrapper}>
      <div className={styles.socialGrid}>
        {socialLinks.map((social, index) => {
          const iconData = iconMap[social.icon] || {};
          
          const name = social.name || "?";
          const Icon = iconData.icon || FaQuestionCircle;
          const iconColor = iconData.color || "#3578e5";
          const description = name === "?" ? "" : (social.desc || `Connect with me on ${name}`);
          const url = social.url;

          return (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.socialCard}
              style={{
                "--card-index": index,
                "--icon-hover-color": iconColor,
              }}
              aria-label={name}
              title={description || name}
            >
              {Icon && (
                <div className={styles.socialIcon}>
                  <Icon />
                </div>
              )}
              <h3 className={styles.socialTitle}>
                {name}
              </h3>
              <p className={styles.socialDesc}>
                {description}
              </p>
            </a>
          );
        })}
      </div>
    </div>
  );
}
