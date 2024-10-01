import React, { useState, useEffect, Suspense, lazy } from 'react';

import './style.css';

const Navbar = lazy(() => import('./Navbar'));
const Toolbar = lazy(() => import('./Toolbar'));
const Editor = lazy(() => import('./Editor'));
const Preview = lazy(() => import('./Preview'));
const Modal = lazy(() => import('./Modal'));


function App() {
  const [markdownContent, setMarkdownContent] = useState(sessionStorage.getItem('markdownContent') || '');

  useEffect(() => {
    sessionStorage.setItem('markdownContent', markdownContent);
  }, [markdownContent]);


  return (
    <div className="page">
      <div className="bar">
        <Navbar setMarkdownContent={setMarkdownContent} />
        <Toolbar setMarkdownContent={setMarkdownContent} />
      </div>
      <div className="container">
        <Editor markdownContent={markdownContent} setMarkdownContent={setMarkdownContent} />
        <Preview markdownContent={markdownContent} />
      </div>
      <Modal isVisible={isResetVisible}
        onConfirm={handleConfirmReset}
        onCancel={handleCancelReset} />
    </div>
  );
}

export default App;
