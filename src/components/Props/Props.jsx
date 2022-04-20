import React, { useState } from 'react';
import TableHeader from './TableHeader/TableHeader';
import TableItem from './TableItem/TableItem';
import PostForm from './PostFrom/PostForm';
import MySelect from './Select/MySelect';
import './Props.css';

const Props = () => {

    const [posts, setPosts] = useState([
        { id: 1, title: "JavaScript", stack: "Mern-stack" },
        { id: 2, title: "Phyton", stack: "Full-stack" },
        { id: 3, title: "C#", stack: "Cyber" },
        { id: 4, title: "Goo", stack: "Back End" }
    ]);

    const [select, setSelect] = useState('')

    const createPost = (newPost) => {
        setPosts([...posts, newPost])
    }

    const removePost = (post) => {
        setPosts(posts.filter(s => s.id !== post.id))
    }

    const sortSelect = (sort) => {
        setSelect(sort)
        setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
    }

    return (
        <div className='wrapper container shadow-lg p-3 mb-5 bg-body rounded'>
            <PostForm createPost={createPost} />
            <br />
            <div
                className="d-flex flex-row-reverse my-2"
            >
                <MySelect
                    value={select}
                    onChange={sortSelect}
                    defaultValue="Sorted by"
                    options={[
                        {
                            value: 'title', name: 'Programming'
                        },
                        {
                            value: 'stack', name: 'Jobs'
                        }
                    ]}
                />
            </div>
            {posts.length
                ?
                <div>
                    <br />
                    <p className='text-center'>Favourite Programming Language</p>
                    <table className='table table-striped'>
                        <TableHeader />
                        <tbody>
                            {posts.map((post, index) => (
                                <TableItem remove={removePost} number={index + 1} post={post} key={post.id} />
                            ))}
                        </tbody>
                    </table>
                </div>
                : <h6 className='my-3 text-center text-danger'>You should some Post</h6>
            }


        </div>
    );
};

export default Props;