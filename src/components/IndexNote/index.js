import React from 'react';

import Link from '@docusaurus/Link';
import useBaseUrl from '@docusaurus/useBaseUrl';
import { usePluginData } from '@docusaurus/useGlobalData';
import { iconMap } from '@site/src/utils/iconMappings';

import { FaBook } from 'react-icons/fa';
import styles from './styles.module.css';

function getNotes() {
  const context = require.context('@site/docs', true, /index\.mdx?$/);

  return context.keys()
    .filter(path => path !== './index.md' && path !== './index.mdx')
    .map(path => {
      const dirName = path.split('/')[1];
      const { frontMatter } = context(path);

      return {
        title: frontMatter.title || dirName.charAt(0).toUpperCase() + dirName.slice(1),
        language: frontMatter.language || dirName.toLowerCase(),
        link: dirName,
        position: frontMatter.sidebar_position || 999
      };
    })

    // Sort by sidebar_position metadata
    .sort((a, b) => a.position - b.position);
}

export default function IndexNote() {
  const notes = getNotes();
  const { path: docsBasePath } = usePluginData('docusaurus-plugin-content-docs');

  return (
    <div className={styles.notesGrid}>
      {notes.map(({ title, language, link }, index) => {

        const noteUrl = useBaseUrl(`${docsBasePath}/${link}`);

        const iconData = iconMap[language] || { icon: FaBook, color: '#666666' };
        const { icon: IconElement, color } = iconData;

        return (
          <div 
            key={title} 
            className={styles.noteCard}
            style={{ '--card-index': index }}
          >
            <div 
              className={styles.noteIcon}
              style={{ color: color }}
              aria-label={title}
            >
              {IconElement && <IconElement />}
            </div>
            <h3 className={styles.noteTitle}>{title}</h3>
            <Link className="button button--primary" to={noteUrl}>
              Open Note
            </Link>
          </div>
        );
      })}
    </div>
  );
}
