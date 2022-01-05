import React, { useState, useRef } from "react";

function CreatePostForm() {
    const [uploadedFileName, setUploadedFileName] = useState(null);
    const [title, setTitle] = useState(null);
    const [desc, setDesc] = useState(null);
    const inputRef = useRef(null);

    const handleUpload = () => {
        inputRef.current?.click();
    };
    const handleDisplayFileDetails = () => {
        inputRef.current?.files &&
            setUploadedFileName(inputRef.current.files[0].name);
    };

    const handleCreatePost = () => {
        console.log(title + " " + desc + " " + uploadedFileName);

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
                    <label className="mx-3">Select image</label>
                    <input
                        ref={inputRef}
                        onChange={handleDisplayFileDetails}
                        className="d-none"
                        type="file"
                    />
                    <button
                        onClick={handleUpload}
                        className={`btn btn-outline-primary`}
                    >
                        Choose File
                    </button>

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