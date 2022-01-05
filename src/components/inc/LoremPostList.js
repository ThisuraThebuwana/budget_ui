import React, { useState, useEffect } from 'react';
import axios from 'axios';

const LoremPostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios
            .get('http://localhost:9000/images')
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
            <h3>Lorem Picsum Posts</h3>
            <div className='item-container'>
                {posts.map((post) => (
                    <div className='card'>
                        <img src={post.download_url} width={200} class="img-fluid" alt="..."></img>
                        {/* <p>Author : {post.author}</p>
                        <p>url : {post.download_url}</p> */}
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LoremPostList;