import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"

const MyPosts = () => {
    return (
        <div className={s.content}>
            <div>
                <h3>my posts</h3>
                <div>
                    <textarea></textarea>
                    <button>Add posts</button>
                    <button>Remove</button>
                </div>
                <div className={s.posts}>
                    <Post messages='Hello, friends!' likeCount='34'/>
                    <Post messages='Life is good!' likeCount='30'/>
                </div>
            </div>
        </div>
    )
}

export default MyPosts;