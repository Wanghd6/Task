import React, { useState } from 'react';

const Navbar = ({ setMarkdownContent, onReset }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContent = event.target.result;
                console.log('File content:', fileContent); // 调试文件内容
                setMarkdownContent(fileContent);
            };
            reader.readAsText(file);
        }
    };

    return (
        <div className="navbar">
            <span className="left_nav">
                <ul className="function">
                    <li
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <a href="#" onClick={(e) => e.preventDefault()}>文件</a>
                        {isHovered && (
                            <ul>
                                <li className="load">
                                    <input
                                        type="file"
                                        className="file-input"
                                        onChange={handleFileChange}
                                        accept=".txt,.md" />
                                    <span className="custom-file-label">导入</span>
                                </li>
                            </ul>
                        )}
                    </li>
                    <li className="reseticon" onClick={onReset}>重置</li>
                </ul>
            </span>
            <span className="right_nav"></span>
        </div>
    );
}

export default Navbar;
