import React from 'react';

const Toolbar = ({ setMarkdownContent }) => {
    const addFormatting = (symbol, position) => {
        const textarea = document.querySelector('.file-content');
        const start = textarea.selectionStart;
        const end = textarea.selectionEnd;
        const selectedText = textarea.value.substring(start, end);
        const newText = `${symbol}${selectedText}${symbol}`;
        textarea.value = textarea.value.substring(0, start) + newText + textarea.value.substring(end);
        const cursorPosition = start + position;
        textarea.setSelectionRange(cursorPosition, cursorPosition);
        textarea.focus();
        setMarkdownContent(textarea.value);
    };

    return (
        <div className="toolbar">
            <ul className="tools">
                <li onClick={() => addFormatting('~~', 2)} title="删除线" className="iconfont">&#xe611;</li>
                <li onClick={() => addFormatting('**', 2)} title="加粗" className="iconfont">&#xe71d;</li>
                <li onClick={() => addFormatting('*', 1)} title="斜体" className="iconfont">&#xe61c;</li>
                <li onClick={() => addFormatting('\n\`\`\`\n', 5)} title="代码块" className="iconfont ">&#xe6db;</li>
                <li onClick={() => addFormatting('\`', 1)} title="行内代码" className="iconfont">&#xe7dd;</li>
            </ul>
        </div>
    );
};

export default Toolbar;
