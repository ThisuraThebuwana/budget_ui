import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import image from '../images/uploads/1641450519266-40327618_2073077836044062_1236086390878371840_n.jpg';

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
                        <img src={require(`../images/uploads/${post.filename}`)} width={500} alt="..."></img>
                        <h5>Title : {post.title}</h5>
                        <p>{post.desc}</p>
                        <div class="row">
                            <div class="col-8">
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
                                    className={`btn btn-primary`}
                                >
                                    <img
                                        src={require(`../images/icons/icons8-remove-50.png`)}
                                        width={20}
                                    ></img>
                                </button>
                            </div>
                            <div class="col-2">
                                <button
                                    // onClick={handleCreatePost}
                                    className={`btn btn-primary`}
                                >
                                    <img src={require(`../images/icons/icons8-thumbs-up-50.png`)} width={20}></img>
                                </button>
                                <p>{post.likes} Likes</p>
                            </div>
                            <div class="col-2">
                                <button
                                    // onClick={handleCreatePost}
                                    className={`btn btn-primary`}
                                >
                                    <img src={require(`../images/icons/icons8-thumbs-down-50.png`)} width={20}></img>
                                </button>
                                <p>{post.dislikes} Dislikes</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default PostList;