import React from 'react';
import Layout from '@theme/Layout';
import styles from './css/notes.module.css';

import NoteCards from '@site/src/components/NoteCard';
import { usePluginData } from '@docusaurus/useGlobalData';


export default function Notes() {
  const { path: docsBasePath } = usePluginData('docusaurus-plugin-content-docs');
  const pathName = docsBasePath.replace('/', '');
  const pageTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
    <Layout
      title={pageTitle}
      description={`My ${pageTitle}`}
    >
      <main className={styles.notesContainer}>
        <div className="container">
          <header className="text-center mb-4">
            <h1 className={styles.pageTitle}>
              My Notes
            </h1>
            <p className={styles.pageDescription}>
              A collection of my self written notes & reference guides
            </p>
          </header>
          <NoteCards/>
        </div>
      </main>
    </Layout>
  );
}
