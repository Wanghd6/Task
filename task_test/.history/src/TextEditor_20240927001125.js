import React from 'react';

const TextEditor = ({ fileContent, setFileContent }) => {
    return (
        <div>
            <textarea
                value={fileContent} // 接收来自父组件的文件内容
                onChange={(e) => setFileContent(e.target.value)} // 更新文件内容
                rows={10}
                cols={50}
            />
        </div>
    );
};

export default TextEditor;
