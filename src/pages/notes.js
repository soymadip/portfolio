import React, { useEffect } from 'react';
import Layout from '@theme/Layout';
import NoteCards from '@site/src/components/NoteIndex';
import { usePluginData } from '@docusaurus/useGlobalData';
import ScrollToTop from '../components/ScrollToTop';

const style = {

  notesContainer: {
    padding: '2rem 0',
    maxWidth: '1200px',
    margin: '0 auto'
  },

  pageTitle: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
    color: 'var(--ifm-color-primary)',
    animation: 'slideUp 0.5s ease-out forwards'
  },

  pageDescription: {
    fontSize: '0.9rem',
    textAlign: 'center',
    color: 'var(--ifm-font-color-tertiary)',
    marginBottom: '2rem',
    animation: 'slideUp 0.5s ease-out 0.2s forwards',
  },

  '@keyframes slideUp': {
    from: {
      opacity: 0,
      transform: 'translateY(20px)'
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)'
    }
  },

  '@media (prefers-reduced-motion: reduce)': {
    notesContainer: {
      animation: 'none !important'
    },
    pageTitle: {
      animation: 'none !important'
    },
    pageDescription: {
      animation: 'none !important',
      opacity: 1
    }
  }
};

export default function Notes() {
  const { path: docsBasePath } = usePluginData('docusaurus-plugin-content-docs');
  const pathName = docsBasePath.replace('/', '');
  const pageTitle = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  // AI generated (partially)
  useEffect(() => {

    if (window.location.hash) {
      const noteId = window.location.hash.substring(1);
      const targetElement = document.getElementById(`note-${noteId}`);
      
      if (targetElement) {

        // Wait a moment for the page to fully render
        setTimeout(() => {

          // Scroll to the element
          targetElement.scrollIntoView({ 
            behavior: 'smooth',
            block: 'center'
          });
          
          // Add blur to all other note cards
          const allNoteCards = document.querySelectorAll('.note-card');
          
          // Add highlight class to the target card 
          targetElement.classList.add('highlight-card');
          
          allNoteCards.forEach(card => {
            if (card.id !== `note-${noteId}`) {
              card.classList.add('blur-card');
            }
          });
          
          // Remove blur and highlight after a delay
          setTimeout(() => {
            allNoteCards.forEach(card => {
              card.classList.remove('blur-card');
            });
            targetElement.classList.remove('highlight-card');
          }, 6000);
        }, 300);
      }
    }
  }, []);

  return (
    <Layout
      title={pageTitle}
      description={`My ${pageTitle}`}
    >
      <main style={style.notesContainer}>
        <div className="container">
          <header className="text-center mb-4">
            <h1 style={style.pageTitle}>
              My Notes
            </h1>
            <p style={style.pageDescription}>
              A collection of my self written notes & reference guides
            </p>
          </header>
          <NoteCards/>
          <ScrollToTop/>
        </div>
      </main>
    </Layout>
  );
}
