import React from 'react';
import Comment from "../components/cards/Comment/Comment";

const Post = ({post, comments}) => {
    return (
        <section className="post">
            <div>
                <h1 className="post__title">{post.id}. {post.title}</h1>
                <p className="post__body">{post.body}</p>
            </div>

            <ul className="post__comments">
                <h2>Комментарии</h2>
                {comments.map(comment => (
                    <Comment key={comment.id} data={comment} />
                ))}
            </ul>
        </section>
    );
};

export default Post;