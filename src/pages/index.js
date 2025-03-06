import React from "react";
import Layout from "@theme/Layout";
import styles from "./index.module.css";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";

// import icons
import { FaGithub, FaLinkedin, FaTelegramPlane } from "react-icons/fa";

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  const { url, baseUrl } = siteConfig;

  const siteUrl = `${url}${baseUrl}`;

  const tUrl = "https://soymadip.me";

  return (
    <Layout title="Me" description="My portfolio website">
      <main className={styles.hero}>
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
                <a href="/projects" className={styles.ctaButton}>
                  View My Work
                </a>
              </div>
              <div className={styles.socialIcons}>
                <a
                  href={`${tUrl}/l/linkedin`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaLinkedin size={24} />
                </a>
                <a
                  href="https://github.com/soymadip"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaGithub size={24} />
                </a>
                <a
                  href={`${tUrl}/l/telegram`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialLink}
                >
                  <FaTelegramPlane size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className={styles.rightSection}>
            <img
              src="https://avatars.githubusercontent.com/u/84225810?v=4"
              alt="profile"
              className={styles.profilePic}
            />
          </div>
        </div>
      </main>
    </Layout>
  );
}
