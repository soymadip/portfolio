import React from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePluginData } from '@docusaurus/useGlobalData';
import { iconMap } from '@site/src/data/iconMappings';

import { FaBook } from 'react-icons/fa';
import styles from './styles.module.css';

function indexNotes() {
  const context = require.context('@site/docs', true, /index\.mdx?$|\.mdx?$/);

  return context.keys()
    .filter(path => {

      // Skip root index file
      if (path === './index.md' || path === './index.mdx') {
        return false;
      }

      const pathParts = path.split('/');
      const isTopLevelFile = pathParts.length === 2 && !path.match(/index\.mdx?$/);
      const isTopLevelDir = pathParts.length === 3 && path.match(/index\.mdx?$/);

      // Keep only top-level files & dirs 
      return isTopLevelFile || isTopLevelDir;

    }).map(path => {
      const pathParts = path.split('/');
      const isTopLevelFile = pathParts.length === 2;
      
      // Extract directory or filename
      const slug = isTopLevelFile 
        ? path.replace('./', '').replace(/\.mdx?$/, '')
        : pathParts[1];
      
      const { frontMatter } = context(path);

      const title = frontMatter.title || slug.charAt(0).toUpperCase() + slug.slice(1);
      const language = frontMatter.language || slug.toLowerCase() || title.toLowerCase();
      const position = frontMatter.sidebar_position || 999;

      return {
        title,
        language,
        link: slug,
        position
      };

    }).sort((a, b) => a.position - b.position);
}

export default function Notecards({ buttonText = 'Open Note' }) {
  const notes = indexNotes();
  const { path: docsBasePath } = usePluginData('docusaurus-plugin-content-docs');

  return (
    <div className={styles.notesGrid}> {
      notes.map(({ title, language, link }, index) => {

        const noteUrl = useBaseUrl(`${docsBasePath}/${link}`);
        const { icon: Icon = FaBook, color = '#666666' } = iconMap[language] || {};

        return (
          <div 
            key={title} 
            className={styles.noteCard}
            style={{ '--card-index': index }}
          >
            <div 
              className={styles.noteIcon}
              style={{ color }}
              aria-label={title}
            >
              <Icon />
            </div>
            <h3 className={styles.noteTitle}>{title}</h3>
            <Link className="button button--primary" to={noteUrl}>
              {buttonText}
            </Link>
          </div>
        );
      })}
    </div>
  );
}
