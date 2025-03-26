import React from 'react';
import s from './PostItem.module.scss';
import DefaultButton from "../../ui/buttons/DefaultButton";
import {useNavigate} from "react-router-dom";

const PostItem = ({post, number, remove}) => {
    const navigate = useNavigate();
    return (
        <article className={s.post}>
            <div className={s.postText}>
                <strong>{number}. {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <div className={s.postBtns}>
                <DefaultButton
                    className={s.postBtn}
                    btnText='Открыть'
                    onClick={() => navigate(`/posts/${post.id}`)}
                />
                <DefaultButton
                    className={s.postBtn}
                    btnText='Удалить'
                    onClick={() => remove(post)}
                />
            </div>
        </article>
    );
};

export default PostItem;