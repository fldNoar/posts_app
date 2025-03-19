import './App.scss';
import PostList from "./react/sections/PostList";
import {useMemo, useState} from "react";
import PostForm from "./react/components/forms/PostForm/PostForm";
import PostFilter from "./react/components/PostFilter";
import CreatePostModal from "./react/popups/CreatePostModal/CreatePostModal";
import DefaultButton from "./react/components/ui/buttons/DefaultButton";

function App() {

    const [posts, setPosts] = useState([
        {id: 1, title: 'Javascript 1', body: 'Desctiption'},
        {id: 2, title: 'Javascript 2', body: 'Desctiption'},
        {id: 3, title: 'Javascript 3', body: 'Desctiption'},
    ]);

    const [filter, setFilter] = useState({
        sort: '',
        query: '',
    });

    const [modal, setModal] = useState(false);

    const sortedPosts = useMemo(() => {
        if (filter.sort) {
            return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
        }
        return posts;
    }, [filter.sort, posts]);

    const sortedAndSearchedPosts = useMemo(() => {
        return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
    }, [filter.query, sortedPosts]);

    const createPost = (newPost) => {
        setPosts([...posts, newPost]);
        setModal(false);
    }

    const removePost = (post) => {
        setPosts(posts.filter((currentPost) => currentPost.id !== post.id));
    }

    return (
        <div className="app">
            <DefaultButton
                btnText="Создать пользователя"
                onClick={() => setModal(true)}
            />
            <CreatePostModal visible={modal} setVisible={setModal} >
                <PostForm createPost={createPost} />
            </CreatePostModal>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter} />
            <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
        </div>
    );
}

export default App;