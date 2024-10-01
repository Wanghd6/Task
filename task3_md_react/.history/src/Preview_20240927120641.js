import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';

const Preview = ({ markdownContent, isSyncScroll }) => {

    const previewRef = useRef(null);
    useEffect(() => {
        let htmlContent = marked.parse(markdownContent);

        // 用正则匹配所有 table 元素，并包装在 div 中
        htmlContent = htmlContent.replace(/(<table>.*?<\/table>)/gs, '<div className="table-container">$1</div>');

        // 更新预览区的 HTML
        document.querySelector('.preview-area').innerHTML = htmlContent;
    }, [markdownContent]);

    const handleScroll = (e) => {
        if (isSyncScroll && previewRef.current) {
            const editorElement = document.querySelector('.file-content');
            editorElement.scrollTop = (previewRef.current.scrollTop / previewRef.current.scrollHeight) * editorElement.scrollHeight;
        }
    };

    return (
        <div className="rich_text">
            <div className="preview-area" ref={previewRef} onScroll={handleScroll}></div>
        </div>
    );
};

export default Preview;
