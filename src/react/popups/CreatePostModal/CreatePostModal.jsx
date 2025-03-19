import React from 'react';
import cl from './CreatePostModal.module.scss'

const CreatePostModal = ({children, visible, setVisible}) => {

    const rootClasses = [cl.createPostModal];
    if (visible) {
        rootClasses.push(cl.createPostModalActive);
    }

    return (
        <div
            className={rootClasses.join(' ')}
            onClick={() => {setVisible(false)}}
        >
            <div
                className={cl.createPostModal__content}
                onClick={e => e.stopPropagation()}
            >
                {children}
            </div>
        </div>
    );
};

export default CreatePostModal;