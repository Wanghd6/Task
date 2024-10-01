import React, { useState } from 'react';
import FileUploader from './FileUploader'; // 文件上传组件
import TextEditor from './TextEditor'; // 文本编辑器组件

const App = () => {
  const [fileContent, setFileContent] = useState(''); // 在父组件中管理文件内容的状态

  return (
    <div>
      <h1>文件上传与编辑</h1>
      {/* 传递 setFileContent 以便上传组件可以更新文件内容 */}
      <FileUploader setFileContent={setFileContent} />
      {/* 传递 fileContent 以便文本框组件可以显示内容 */}
      <TextEditor fileContent={fileContent} setFileContent={setFileContent} />
    </div>
  );
};

export default App;
