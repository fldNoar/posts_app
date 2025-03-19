import React from 'react';
import PostItem from "../cards/Post/PostItem";

const PostList = ({posts, title, remove}) => {
    return (
        <section>
            <h2 className="app__title">{title}</h2>
            {posts.map((post, index) => (
                <PostItem remove={remove} number={index + 1} key={post.id} post={post} />
            ))}
        </section>
    );
};

export default PostList;