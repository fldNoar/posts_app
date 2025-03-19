import React from 'react';
import s from './PostItem.module.scss';
import DefaultButton from "../../ui/buttons/DefaultButton";

const PostItem = ({post, number, remove}) => {
    return (
        <article className={s.post}>
            <div>
                <strong>{number}. {post.title}</strong>
                <p>{post.body}</p>
            </div>
            <div>
                <DefaultButton
                    btnText='Удалить'
                    onClick={() => remove(post)}
                />
            </div>
        </article>
    );
};

export default PostItem;