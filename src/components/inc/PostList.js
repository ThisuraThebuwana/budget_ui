import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios
            .get('http://localhost:9000/posts')
            .then((res) => {
                console.log(res);
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h3>My Posts</h3>
            <div className='item-container'>
                {posts.map((post) => (
                    <div className='card'>
                        <h5>Title : {post.title}</h5>
                        <p>{post.desc}</p>
                        <p>Likes : {post.likes}</p>
                        <p>Dislikes : {post.dislikes}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PostList;