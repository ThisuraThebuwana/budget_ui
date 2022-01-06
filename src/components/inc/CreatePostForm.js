import React, { useState, useRef } from "react";
import axios from 'axios';

function CreatePostForm() {
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const [isAlertOn, setIsAlertOn] = useState(false);

    const inputRef = useRef(null);

    const data = new FormData();

    const handleDisplayFileDetails = (event) => {
        data.append('file', event.target.files[0]);
    };

    const handleCreatePost = () => {

        data.append('title', title);
        data.append('desc', desc);

        axios.post('http://localhost:9000/posts', data);

        setIsAlertOn(true);
        setTitle("");
        setDesc("");
        inputRef.current.value = "";
    };

    return (
        <div class="card shadow form-card">
            <div class="card-header">
                <h5>New Post</h5>
            </div>
            <div class="card-body">

                <div className="m-3">
                    <div class="mb-3">
                        <input
                            type="email"
                            class="form-control"
                            id="exampleFormControlInput1"
                            placeholder="Title" value={title}
                            onChange={e => setTitle(e.target.value)}
                        />
                    </div>
                    <div class="mb-3">
                        <textarea
                            class="form-control"
                            id="exampleFormControlTextarea1"
                            placeholder="Write something."
                            rows="3"
                            value={desc}
                            onChange={e => setDesc(e.target.value)}
                        ></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Select image</label>
                        <input ref={inputRef} class="form-control" type="file" id="formFile" onChange={handleDisplayFileDetails} />
                    </div>
                    <div className="form-btn">
                        <button
                            onClick={handleCreatePost}
                            className={`btn btn-primary form-post-btn`}
                        >Post</button>
                    </div>
                    {(isAlertOn) ?
                        <div class="alert alert-success alert-dismissible fade show" role="alert">
                             Successfully posted!
                            <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                        </div>
                        : null}
                </div>
            </div>
        </div>
    );
}

export default CreatePostForm;