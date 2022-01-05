import React from "react";
import ContactList from "../inc/ContactsList";
import CreatePostForm from "../inc/CreatePostForm";
import PostList from "../inc/PostList";

function Home() {
    return (
        <div className="container">
            <div class="row">
                <div class="col section1">
                    <ContactList/>
                </div>
                <div class="col section2">
                    <CreatePostForm/>
                    <PostList/>
                </div>
                <div class="col section3">
                    
                </div>
            </div>
        </div>
    );
}

export default Home;