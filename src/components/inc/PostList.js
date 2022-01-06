import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PostList = () => {
    const [posts, setPosts] = useState([]);
    const [path, setPath] = useState("");

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = () => {
        axios
            .get('http://localhost:9000/posts')
            .then((res) => {
                setPosts(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <div>
            <h4>My Posts</h4>
            <div className='item-container'>
                {posts.map((post) => (
                    <div className='card shadow post-card'>
                        <img src={require(`../images/uploads/${post.filename}`)} width={500} alt="..."></img>
                        <h5>Title : {post.title}</h5>
                        <p>{post.desc}</p>
                        <div class="row">
                            <div class="col-5">
                                <button
                                    onClick={async () => {
                                        axios.delete(`http://localhost:9000/posts/${post._id}`)
                                            .then((res) => {
                                                fetchPosts();
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }}
                                    className={`btn btn-danger post-btn`}
                                >
                                    <img
                                        src={require(`../images/icons/icons8-remove-50.png`)}
                                        width={20}
                                    ></img>
                                </button>
                            </div>
                            <div class="col-3 btnArea">
                                <button
                                    onClick={async () => {
                                        axios.patch(`http://localhost:9000/posts/increment-likes/${post._id}`, {likes: post.likes+1})
                                            .then((res) => {
                                                fetchPosts();
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });

                                    }}
                                    className={`btn btn-primary post-btn`}
                                >
                                    <img src={require(`../images/icons/icons8-thumbs-up-50.png`)} width={20}></img>
                                </button>
                                <p className='btn-lbl'>{post.likes} Likes</p>
                            </div>
                            <div class="col-4 btnArea">
                                <button
                                    onClick={async () => {
                                        axios.patch(`http://localhost:9000/posts/increment-dislikes/${post._id}`, {dislikes: post.dislikes+1})
                                            .then((res) => {
                                                fetchPosts();
                                            })
                                            .catch((err) => {
                                                console.log(err);
                                            });
                                    }}
                                    className={`btn btn-primary post-btn post-dislike-btn`}
                                >
                                    <img src={require(`../images/icons/icons8-thumbs-down-50.png`)} width={20}></img>
                                </button>
                                <p className='btn-lbl'>{post.dislikes} Dislikes</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PostList;