import React, { useState } from 'react';

const Navbar = ({ setMarkdownContent, onReset }) => {
    const [isHovered, setIsHovered] = useState(false);

    const handleFileChange = (e) => {
        console.log('File input changed'); // 调试是否触发
        const file = e.target.files[0];
        if (file) {
            console.log('File selected:', file.name); // 检查文件是否正确选择
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
                        <span onClick={(e) => e.preventDefault()}>文件</span>
                        {isHovered && (
                            <ul>
                                <li className="load">
                                    <label className="custom-file-label" htmlFor="file-input">导入</label>
                                    <input
                                        id="file-input"
                                        type="file"
                                        className="file-input"
                                        onChange={(e) => {
                                            console.log('File input changed');
                                            if (e.target.files.length > 0) {
                                                console.log('Selected file:', e.target.files[0].name);
                                            } else {
                                                console.log('No file selected or file dialog cancelled');
                                            }
                                            handleFileChange(e);
                                        }}
                                        accept=".txt,.md" />
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
