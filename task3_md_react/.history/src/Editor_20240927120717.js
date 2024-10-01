import React, { useRef } from 'react';

const Editor = ({ markdownContent, setMarkdownContent, isSyncScroll }) => {

    const editorRef = useRef(null);

    const handleScroll = (e) => {
        if (isSyncScroll && editorRef.current) {
            const previewElement = document.querySelector('.preview-area');
            previewElement.scrollTop = (editorRef.current.scrollTop / editorRef.current.scrollHeight) * previewElement.scrollHeight;
        }
    };

    return (
        <div className="md_edit">
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
