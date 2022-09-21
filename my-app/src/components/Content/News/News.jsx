import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";

const News = (props) =>{
    return(
        <div className={s.news}>
            <NewsItem />
        </div>
    )
}
export default News;