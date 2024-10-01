import React from 'react';

const FileUploader = ({ setFileContent }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const content = event.target.result;
                setFileContent(content); // 将读取的文件内容传递给父组件
            };
            reader.readAsText(file); // 以文本形式读取文件
        }
    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".txt,.md" />
        </div>
    );
};

export default FileUploader;
