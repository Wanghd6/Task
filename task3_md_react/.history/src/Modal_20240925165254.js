import React from 'react';

const Modal = ({ isVisible, onConfirm, onCancel }) => {

    if (!isVisible) {
        return null; // 如果弹窗不可见，则不渲染组件
    }
    return (
        <>
            <div className="reset">
                <div className="tittle">
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
