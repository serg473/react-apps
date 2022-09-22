import React from "react";
import s from './NewsItem.module.css'
import {NavLink} from "react-router-dom";

const NewsItem = (props) => {
    return (
        <div className={s.item}>
            <NavLink to={`id` + props.id} >
                <div className={s.news_img}>
                    <img src={props.src} alt=""/>
                </div>
                <div className={s.news_title}>
                    <h3>{props.title}</h3>
                </div>
            </NavLink>
            <div className={s.date_tag}>
                <div className={s.date}>
                    {props.date}
                </div>
                <div className={s.tag}>
                    {`#` + props.tag}
                </div>
            </div>
        </div>
    )
}
export default NewsItem;