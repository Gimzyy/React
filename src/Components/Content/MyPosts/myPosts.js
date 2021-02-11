import React from 'react';
import style from './myPosts.module.css';
import Post from "./Post/post";

const MyPosts = ()=> {
    return(
        <div>
            <div>
                My post
                <div>
                    <textarea>123</textarea>
                    <button>Add Post</button>
                </div>
            </div>
            <div>
                <Post message='Hi, how are you?'/>
                <Post message='Good day' />
            </div>
        </div>
    );
};

export default MyPosts;