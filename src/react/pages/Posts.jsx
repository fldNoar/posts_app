import React, {useEffect, useState} from 'react';
import {usePosts} from "../../scripts/hooks/usePosts";
import {useFetching} from "../../scripts/hooks/useFetching";
import PostService from "../../scripts/backend/API/PostService";
import {getPageCount} from "../../scripts/helpers/pages";
import DefaultButton from "../components/ui/buttons/DefaultButton";
import CreatePostModal from "../popups/CreatePostModal/CreatePostModal";
import PostForm from "../components/forms/PostForm/PostForm";
import PostFilter from "../components/PostFilter";
import PostList from "../sections/PostList";
import Pagination from "../components/containers/Pagination";

const Posts = () => {
    const [posts, setPosts] = useState([]);
    const [filter, setFilter] = useState({
        sort: '',
        query: '',
    });
    const [modal, setModal] = useState(false);
    const [pagesConfig, setPagesConfig] = useState({
        totalPages: 0,
        postsLimit: 10,
        currentPage: 1,
    });
    const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

    const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
        const response = await PostService.getAll(pagesConfig.postsLimit, pagesConfig.currentPage);
        setPosts(response.data);
        const totalCount = response.headers['x-total-count'];
        setPagesConfig({
            ...pagesConfig,
            totalPages : getPageCount(totalCount, pagesConfig.postsLimit)
        });
    })

    useEffect(() => {
        fetchPosts();
    }, [pagesConfig.currentPage]);

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
                btnText="Создать пост"
                onClick={() => setModal(true)}
            />
            <CreatePostModal visible={modal} setVisible={setModal} >
                <PostForm createPost={createPost} />
            </CreatePostModal>
            <hr/>
            <PostFilter filter={filter} setFilter={setFilter} />

            {postError &&
                <h1>Произошла ошибка ${postError}</h1>
            }

            {isPostLoading
                ? <h1>Идет загрузка...</h1>
                : <PostList remove={removePost} posts={sortedAndSearchedPosts} title='Список постов'/>
            }

            <Pagination totalPages={pagesConfig.totalPages} currentPage={pagesConfig.currentPage} changePage={setPagesConfig} />
        </div>
    );
};

export default Posts;