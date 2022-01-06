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
            <h4>Lorem Picsum Posts</h4>
            <div className='item-container'>
                {posts.map((post) => (
                    <div className='card image-card'>
                        <img src={post.download_url} class="img-fluid" alt="..."></img>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default LoremPostList;