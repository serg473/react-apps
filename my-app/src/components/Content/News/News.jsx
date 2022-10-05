import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";

const News = (props) =>{
    let newsDate = props.state.newsData.map(news => <NewsItem id = {news.id} src = {news.src} title = {news.title} date = {news.datePublish} tag = {news.tag} />);
    let addNews = React.createRef();
    let getAddNews = () =>{
        let getTextArea = addNews.current.value;
        props.addNews(getTextArea);
    }
    return(
        <div className={s.news}>
            {newsDate}
            <div>
                <textarea  ref={addNews} value='Мой текст' cols="30" rows="10"></textarea>
                <div>
                    <button onClick={getAddNews}>AddNews</button>
                </div>
            </div>
        </div>
    )
}
export default News;