import React from "react";
import s from './NewsItem.module.css'
import {NavLink} from "react-router-dom";
import defaultimg from '../img/default.jpg'


const NewsItem = (props) => {

    return (
        <div className={s.item}>
            <NavLink to={`id` + props.id} >
                <div className={s.news_img}>
                    <img src={props.photos == null ? defaultimg : props.photos} alt=""/>
                </div>
                <div className={s.news_title}>
                    <h3>{props.name}</h3>
                </div>
            </NavLink>
            <div className={s.date_tag}>

            </div>
        </div>
    )
}
export default NewsItem;