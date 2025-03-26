import React from 'react';
import cl from './Comment.module.scss'

const Comment = ({data}) => {
    return (
        <li className={cl.postItem}>
            <h3>{data.email}</h3>
            <p>{data.body}</p>
        </li>
    );
};

export default Comment;