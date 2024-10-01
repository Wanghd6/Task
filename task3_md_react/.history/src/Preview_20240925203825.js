import React, { useEffect } from 'react';
import { marked } from 'marked';

const Preview = ({ markdownContent }) => {
    useEffect(() => {
        const htmlContent = marked.parse(markdownContent);
        document.querySelector('.preview-area').innerHTML = htmlContent;
    }, [markdownContent]);

    return (
        <div class="rich_text">
            <div className="preview-area"></div>
        </div>
    );
};

export default Preview;
