import './App.scss';
import PostList from "./react/sections/PostList";
import {useEffect, useState} from "react";
import PostForm from "./react/components/forms/PostForm/PostForm";
import PostFilter from "./react/components/PostFilter";
import CreatePostModal from "./react/popups/CreatePostModal/CreatePostModal";
import DefaultButton from "./react/components/ui/buttons/DefaultButton";
import {usePosts} from "./scripts/hooks/usePost";
import PostService from "./scripts/backend/API/PostService";

function App() {

    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({
        sort: '',
        query: '',
    });
    const [modal, setModal] = useState(false);
    const [isPostLoading, setIsPostLoading] = useState(false);
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    async function fetchPosts() {
        setIsPostLoading(true);
        const posts = await PostService.getAll();
        setPosts(posts);
        setIsPostLoading(false);
    }

    useEffect(() => {
        fetchPosts();
    }, []);

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
            {isPostLoading
                ? <h1>Идет загрузка...</h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
            }
        </div>
    );
}

export default App;