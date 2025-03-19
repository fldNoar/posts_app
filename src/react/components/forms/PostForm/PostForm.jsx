import React, {useState} from 'react';
import DefaultInput from "../../inputs/DefaultInput/DefaultInput";
import DefaultButton from "../../ui/buttons/DefaultButton";

const PostForm = ({createPost}) => {

    const [newPost, setNewPost] = useState({
        title: '',
        body: '',
    });

    const addNewPost = (e) => {
        e.preventDefault();
        createPost({
            id: Date.now(),
            ...newPost,
        });
        setNewPost({
            title: '',
            body: '',
        });
    }

    return (
        <form>
            <DefaultInput
                value={newPost.title}
                type="text"
                placeholder='Название поста'
                onChange={(e) => setNewPost({...newPost, title: e.target.value})}
            />
            <DefaultInput
                value={newPost.body}
                type="text"
                placeholder='Описание поста'
                onChange={(e) => setNewPost({...newPost, body: e.target.value})}
            />
            <DefaultButton
                btnText='Создать пост'
                onClick={addNewPost}
            />
        </form>
    );
};

export default PostForm;