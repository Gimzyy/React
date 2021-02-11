import React from 'react';
import style from './Post.module.css';

const Post = (props)=> {
    return(
        <div className= {style.item}>
            <img src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-512.png' alt='avatar'/>
            {props.message}

        </div>
    );
};

export default Post;