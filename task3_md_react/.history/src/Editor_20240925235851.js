import React from 'react';

const Editor = ({ markdownContent, setMarkdownContent }) => {

    return (
        <div className="md_edit">
            <textarea
                className="file-content"
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
            />
        </div>
    );
};

export default Editor;
