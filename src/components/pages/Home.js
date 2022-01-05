import React from "react";
import ContactList from "../inc/ContactsList";
import CreatePostForm from "../inc/CreatePostForm";
import LoremPostList from "../inc/LoremPostList";
import PostList from "../inc/PostList";

function Home() {
    return (
        <div className="container">
            <div class="row">
                <div class="col">
                    <ContactList/>
                </div>
                <div class="col">
                    <CreatePostForm/>
                    <PostList/>
                </div>
                <div class="col">
                    <LoremPostList/>
                </div>
            </div>
        </div>
    );
}

export default Home;