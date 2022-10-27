import React from "react";
import s from './MusicItem.module.css'

const MusicItem = (props) => {

    return (
        <a className={s.items}>
            <div>{props.name}</div>
            <div>{props.date}</div>
        </a>
    )
}
export default MusicItem;