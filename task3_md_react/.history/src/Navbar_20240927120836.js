import React from 'react';

const Navbar = ({ onFileChange, onReset, isSyncScroll, setIsSyncScroll }) => {

    const toggleSyncScroll = () => {
        setIsSyncScroll(prev => !prev);
    };

    return (
        <div className="navbar">
            <span className="left_nav">
                <ul className="function">
                    <li>
                        <span>文件</span>
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
                    </li>
                    <li className="reseticon" onClick={onReset}>重置</li>
                    <li className="Syncicon" onClick={toggleSyncScroll} style={{ backgroundColor: isSyncScroll ? '#eee' : 'transparent' }}>同步滚动</li>
                </ul>
            </span>
            <span className="right_nav"></span>
        </div>
    );
};

export default Navbar;
