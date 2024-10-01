import React, { useState } from 'react';
import Modal from './Modal';

const Navbar = ({ setMarkdownContent }) => {
    const [isResetVisible, setIsResetVisible] = useState(false); // 控制弹窗显示的状态
    const [isHovered, setIsHovered] = useState(false);

    const handleFileChange = (e) => {
        console.log('File input change detected');  // 确认事件触发
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (event) => {
                const fileContent = event.target.result;
                console.log('File content:', fileContent); // 检查是否正确读取文件内容
                // setMarkdownContent(fileContent); // 更新 markdownContent
                setTimeout(() => {
                    setMarkdownContent(fileContent); // 确保异步操作成功后再更新
                }, 0);
            };
            reader.readAsText(file);
        }
    };


    const handleReset = () => {
        setIsResetVisible(true); // 显示弹窗
    };

    const handleCancelReset = () => {
        setIsResetVisible(false); // 隐藏弹窗
    };

    const handleConfirmReset = () => {
        fetch('./test.txt')
            .then(response => response.text())
            .then(data => {
                setMarkdownContent(data); // 重置 markdown 内容
                sessionStorage.setItem('markdownContent', data); // 保存到 sessionStorage
            })
            .catch(error => console.error('Error loading the default markdown file:', error));
        setIsResetVisible(false); // 隐藏弹窗
    };

    return (
        <div className="navbar">
            <span className="left_nav">
                <ul className="function">
                    <li
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}>
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
                            </ul>)}
                    </li>
                    <li className="reseticon" onClick={handleReset}>重置</li>
                </ul>
            </span>
            <span className="right_nav"></span>
            <Modal
                isVisible={isResetVisible}
                onConfirm={handleConfirmReset}
                onCancel={handleCancelReset}
            />
        </div>
    );
}

export default Navbar;
