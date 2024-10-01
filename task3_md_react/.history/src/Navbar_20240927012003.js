import React, { useState } from 'react';

const Navbar = ({ onFileChange, onReset }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="navbar">
            <span className="left_nav">
                <ul className="function">
                    <li
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <span>文件</span>
                        {isHovered && (
                            <ul>
                                <li className="load">
                                    <input
                                        type="file"
                                        className="file-input"
                                        onChange={(e) => {
                                            console.log('File input changed'); // 添加调试信息
                                            onFileChange(e);
                                        }} // 使用传入的处理函数
                                        accept=".txt,.md"
                                    />
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
};

export default Navbar;
