import React, { useEffect, useRef } from 'react';
import { marked } from 'marked';
import { throttle } from 'lodash';

const Preview = ({ markdownContent, isSyncScroll }) => {
    const previewRef = useRef(null);

    useEffect(() => {
        let htmlContent = marked.parse(markdownContent);

        // 用正则匹配所有 table 元素，并包装在 div 中
        htmlContent = htmlContent.replace(/(<table>.*?<\/table>)/gs, '<div class="table-container">$1</div>');

        // 更新预览区的 HTML
        if (previewRef.current) {
            previewRef.current.innerHTML = htmlContent;
        }
    }, [markdownContent]);

    const handleScroll = throttle(() => {
        if (isSyncScroll && previewRef.current) {
            const previewElement = previewRef.current;
            const ratio = previewElement.scrollTop / (previewElement.scrollHeight - previewElement.clientHeight);

            const editorElement = document.querySelector('#edit');
            const targetY = (editorElement.scrollHeight - editorElement.clientHeight) * ratio;
            editorElement.scrollTo(0, targetY);
        }
    }, 100);

    return (
        <div className="rich_text">
            <div className="preview-area" ref={previewRef} onScroll={handleScroll}></div>
        </div>
    );
};

export default Preview;
