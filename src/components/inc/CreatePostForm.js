import React, { useState, useRef } from "react";
import axios from 'axios';

function CreatePostForm() {
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const inputRef = useRef(null);

    const data = new FormData();

    // const handleUpload = () => {
    //     inputRef.current?.click();
    // };
    const handleDisplayFileDetails = (event) => {
        data.append('file', event.target.files[0]);
    };

    const handleCreatePost = () => {

        data.append('title', title);
        data.append('desc', desc);

        axios.post('http://localhost:9000/posts', data);

        setTitle("");
        setDesc("");
        inputRef.current.value = "";
    };

    return (
        <div class="card shadow">
            <div class="card-header">
                New Post
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
                    {/* <label className="mx-3">Select image</label>
                    <input
                        ref={inputRef}
                        onChange={handleDisplayFileDetails}
                        className="d-none"
                        type="file"
                    /> */}
                    <div class="mb-3">
                        <label for="formFile" class="form-label">Select image</label>
                        <input ref={inputRef} class="form-control" type="file" id="formFile" onChange={handleDisplayFileDetails} />
                    </div>
                    {/* <button
                        onClick={handleUpload}
                        className={`btn btn-outline-primary`}
                    >
                        Choose File
                    </button> */}

                    <button
                        onClick={handleCreatePost}
                        className={`btn btn-outline-primary`}
                    >Post</button>
                </div>
            </div>
        </div>
    );
}

export default CreatePostForm;