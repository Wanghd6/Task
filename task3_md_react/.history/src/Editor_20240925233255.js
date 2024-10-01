import React from 'react';
import { marked } from 'marked';

const Editor = ({ markdownContent, setMarkdownContent }) => {

    const handleMarkdownChange = (e) => {
        const content = e.target.value;

        // 解析 markdown 为 HTML
        let parsedContent = marked.parse(content);

        // 用正则匹配所有 table 元素，并包装在 div 中
        parsedContent = parsedContent.replace(/(<table>.*?<\/table>)/gs, '<div class="table-container">$1</div>');

        // 更新 markdown 内容
        setMarkdownContent(content);

        // 直接更新页面中的 HTML（可以在 Preview 中处理这个部分）
        document.querySelector('.preview-area').innerHTML = parsedContent;
    };


    return (
        <div className="md_edit">
            <textarea
                className="file-content"
                value={markdownContent}
                onChange={handleMarkdownChange}
            />
        </div>
    );
};

export default Editor;
