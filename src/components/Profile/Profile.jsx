import React from "react";
import s from './Profile.module.css'
import MyPosts from './MyPosts/MyPosts'

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
                <img src='https://runews24.ru/assets/components/phpthumbof/cache/c36342ea58f1e9ff2f1fa51e0735ca75.e7b3df8d2521429058af50ff07f8cef7.jpg'></img>
            </div>
            <div>
                ava + description
            </div> 
            <MyPosts />          
        </div>
    )
}

export default Profile;