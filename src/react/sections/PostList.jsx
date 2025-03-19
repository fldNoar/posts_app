import React from 'react';
import PostItem from "../components/cards/Post/PostItem";

const PostList = ({posts, title, remove}) => {

    if (!posts.length) {
        return (
            <h1>Посты не найдены</h1>
        )
    }

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