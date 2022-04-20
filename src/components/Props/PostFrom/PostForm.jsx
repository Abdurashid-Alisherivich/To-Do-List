import React, {useState} from 'react';
import MyInput from '../MyInput/MyInput';
import MyButton from '../UI/MyButton';

const PostForm = ({createPost}) => {

    const [post, setPost] = useState({ title: '', stack: ''})

    const addPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...post, 
            id: Date.now()
        }
        createPost(newPost)
        setPost({ title: '', stack: '' })
    }

    return (
        <form>
            <h4 className='text-center'>Create Your post</h4>
            <MyInput
                type="text"
                className='form-control my-3'
                placeholder='Programming Language'
                value={post.title}
                onChange={e => setPost({ ...post, title: e.target.value })}
            >
            </MyInput>
            <MyInput
                type="text"
                className='form-control'
                placeholder='Enter your favourite stack'
                value={post.stack}
                onChange={e => setPost({ ...post, stack: e.target.value })}
            >
            </MyInput>
            <br />
            <MyButton
                onClick={addPost}
            >
                Add Post
            </MyButton>
        </form>
    );
};

export default PostForm;