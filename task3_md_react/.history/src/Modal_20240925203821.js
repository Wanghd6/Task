import React, { useEffect } from 'react';

const Modal = ({ isVisible, onConfirm, onCancel }) => {

    // 添加事件监听器，当点击弹窗外部时关闭弹窗
    useEffect(() => {
        const handleClickOutside = (event) => {
            const modal = document.querySelector('.reset');
            if (modal && !modal.contains(event.target)) {
                onCancel(); // 如果点击的是弹窗外的区域，关闭弹窗
            }
        };

        if (isVisible) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        // 清除事件监听器
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isVisible, onCancel]);

    if (!isVisible) {
        return null; // 如果弹窗不可见，则不渲染组件
    }

    return (
        <>
            <div className="reset">
                <div className="title">
                    <span className="iconfont icon">&#xe8e9;</span>
                    <span className="resetfont">确认重置么?</span>
                </div>
                <div className="resetbody">
                    <div>重置后将丢失本地保存的文本。</div>
                    <div className="resetbutton">
                        <span className="no" onClick={onCancel}>取消</span>
                        <span className="yes" onClick={onConfirm}>确定</span>
                    </div>
                </div>
            </div>
            <div className="bg"></div>
        </>
    );
};

export default Modal;
