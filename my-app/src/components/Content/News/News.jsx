import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";

const News = (props) =>{
    let newsDate = props.state.newsData.map(news => <NewsItem id = {news.id} src = {news.src} title = {news.title} date = {news.datePublish} tag = {news.tag} />);
    return(
        <div className={s.news}>
            {newsDate}
        </div>
    )
}
export default News;