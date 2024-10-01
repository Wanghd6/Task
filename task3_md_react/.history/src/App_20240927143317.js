import React, { useState, useEffect, Suspense, lazy } from 'react';

import './style.css';

const Navbar = lazy(() => import('./Navbar'));
const Toolbar = lazy(() => import('./Toolbar'));
const Editor = lazy(() => import('./Editor'));
const Preview = lazy(() => import('./Preview'));
const Modal = lazy(() => import('./Modal'));

function App() {
  const [markdownContent, setMarkdownContent] = useState(sessionStorage.getItem('markdownContent') || '');
  const [isResetVisible, setIsResetVisible] = useState(false); // 控制弹窗显示的状态
  const [isSyncScroll, setIsSyncScroll] = useState(false); // 新增的状态

  useEffect(() => {
    console.log('Updated markdownContent:', markdownContent); // 调试 markdown 内容
    sessionStorage.setItem('markdownContent', markdownContent);
  }, [markdownContent]);

  const handleConfirmReset = () => {
    fetch('/test.txt')
      .then(response => response.text())
      .then(data => {
        setMarkdownContent(data); // 重置 markdown 内容
        sessionStorage.setItem('markdownContent', data); // 保存到 sessionStorage
      })
      .catch(error => console.error('Error loading the default markdown file:', error));
    setIsResetVisible(false); // 隐藏弹窗
  };

  const handleCancelReset = () => {
    setIsResetVisible(false); // 隐藏弹窗
  };

  // 处理文件选择逻辑
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log('No file selected.');
      return;
    }

    if (!['text/plain', 'text/markdown'].includes(file.type)) {
      alert('Please select a .txt or .md file');
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const fileContent = event.target.result;
      setMarkdownContent(fileContent);
    };
    reader.readAsText(file);
  };

  return (
    <div className="page">
      <div className="bar">
        <Suspense fallback={<div>Loading...</div>}>
          <Navbar onFileChange={(e) => handleFileChange(e)}
            onReset={() => setIsResetVisible(true)}
            isSyncScroll={isSyncScroll}
            toggleSyncScroll={() => setIsSyncScroll(!isSyncScroll)} />
          <Toolbar setMarkdownContent={setMarkdownContent} />
        </Suspense>
      </div>
      <div className="container">
        <Suspense fallback={<div>Loading...</div>}>
          <Editor markdownContent={markdownContent}
            setMarkdownContent={setMarkdownContent}
            isSyncScroll={isSyncScroll} />
          <Preview markdownContent={markdownContent} isSyncScroll={isSyncScroll} />
        </Suspense>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Modal
          isVisible={isResetVisible}
          onConfirm={handleConfirmReset}
          onCancel={handleCancelReset}
        />
      </Suspense>
    </div>
  );
}

export default App;
