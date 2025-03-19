import './App.scss';
import PostList from "./react/components/containers/PostList";
import {useState} from "react";
import PostForm from "./react/components/forms/PostForm/PostForm";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Desctiption'},
        {id: 2, title: 'Javascript 2', body: 'Desctiption'},
        {id: 3, title: 'Javascript 3', body: 'Desctiption'},
    ]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
    }

    const removePost = (post) => {
        setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
    }

    return (
        <div className="app">
            <PostForm createPost={createPost} />
            <PostList remove={removePost} posts={posts} title='Список постов 1'/>
        </div>
    );
}

export default App;