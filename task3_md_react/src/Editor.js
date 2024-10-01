import React, { useRef } from 'react';

const Editor = ({ markdownContent, setMarkdownContent, isSyncScroll }) => {

    const editorRef = useRef(null);

    const handleScroll = () => {
        if (isSyncScroll && editorRef.current) {
            const editorElement = editorRef.current;
            const ratio = editorElement.scrollTop / (editorElement.scrollHeight - editorElement.clientHeight);

            const previewElement = document.querySelector('.preview-area');
            const targetY = (previewElement.scrollHeight - previewElement.clientHeight) * ratio;
            previewElement.scrollTo(0, targetY);
        }
    };

    return (
        <div className="md_edit" id="edit">
            <textarea
                className="file-content"
                ref={editorRef}
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                onScroll={handleScroll}
            />
        </div>
    );
};

export default Editor;