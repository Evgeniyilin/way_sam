import React from "react";
import s from './MyPosts.module.css'
import Post from "./Post/Post"

console.log()
const MyPosts = () => {
    let posts = [
        {id: 1, message: 'Hello, friends!', likesCount: 34},
        {id: 2, message: 'Life is good!', likesCount: 30}
    ]

    let postsElements = posts.map(p => <Post messages={p.message} likesCount={p.likesCount}/>);

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
                    {postsElements}
                </div>
            </div>
        </div>
    )
}

export default MyPosts;