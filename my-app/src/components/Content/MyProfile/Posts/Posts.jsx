import React from 'react';
import p from './Posts.module.css'

const Posts = (props) => {
    debugger;
    return (
        <div className={p.item_post}>
            <div className={p.title}>{props.title}</div>
            <div className={p.content}>
                <img src={props.photo} alt=""/>
                <div className={p.desc}>
                    <p>{props.body}</p>
                </div>
            </div>
        </div>
    );
};

export default Posts;