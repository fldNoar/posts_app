import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useFetching} from "../../scripts/hooks/useFetching";
import PostService from "../../scripts/backend/API/PostService";
import Post from "../sections/Post";

const PostIdPage = () => {
    const {id} = useParams();
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);

    const [fetchPostById, isLoading, error] = useFetching(async () => {
        const response = await PostService.getById(id);
        setPost(response.data);
    });

    const [fetchComments, isComsLoading, comsError] = useFetching(async () => {
        const response = await PostService.getPostComs(id);
        setComments(response.data);
    });
    
    useEffect(() => {
        fetchPostById();
        fetchComments();
    }, []);

    return (
        <>
            {isLoading
                ? <h1>Идет загрузка...</h1>
                : <Post post={post} comments={comments} />
            }
        </>
    );
};

export default PostIdPage;