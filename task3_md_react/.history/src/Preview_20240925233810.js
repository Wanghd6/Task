import React, { useEffect } from 'react';
import { marked } from 'marked';

const Preview = ({ markdownContent }) => {

    useEffect(() => {
        let htmlContent = marked.parse(markdownContent);

        // 用正则匹配所有 table 元素，并包装在 div 中
        htmlContent = htmlContent.replace(/(<table>.*?<\/table>)/gs, '<div class="table-container">$1</div>');

        // 更新预览区的 HTML
        document.querySelector('.preview-area').innerHTML = htmlContent;
    }, [markdownContent]);


    return (
        <div class="rich_text">
            <div className="preview-area"></div>
        </div>
    );
};

export default Preview;
