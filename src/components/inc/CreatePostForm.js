import React from "react";

class CreatePostForm extends React.Component {
    render() {
        return <div class="card shadow">
            <h5 class="card-header">New Post</h5>
            <div class="card-body">
                <div class="mb-4">
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Title" />
                </div>
                <div class="mb-3">
                    <textarea class="form-control" id="exampleFormControlTextarea1" placeholder="Write something." rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <label for="formFile" class="form-label">Select image</label>
                    <input class="form-control" type="file" id="formFile" />
                </div>
            </div>
        </div>;
    }
}

export default CreatePostForm;