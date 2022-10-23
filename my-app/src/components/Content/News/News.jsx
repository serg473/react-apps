import React from "react";
import s from './News.module.css'
import NewsItem from "./NewsItem/NewsItem";
import {getAddNewsActionCreater, postNewsTextActionCreater} from "../../../Redux/news-reducer";

const News = (props) =>{
    debugger;
    let newsDate = props.state.newsData.map(news => <NewsItem id = {news.id} src = {news.src} title = {news.title} date = {news.datePublish} tag = {news.tag} />);
    let addNews = React.createRef();
    let getAddNews = () =>{
        let action  = getAddNewsActionCreater();
        props.dispatch(action);
    }
    let postNewsText = () =>{
        let myText = addNews.current.value;
        let action = postNewsTextActionCreater(myText);
        props.dispatch(action);
    }
    return(
        <div className={s.news}>
            {newsDate}
            <div>
                <textarea onChange={postNewsText}  ref={addNews} value={props.state.newsTextData} cols="30" rows="10"></textarea>
                <div>
                    <button onClick={getAddNews}>AddNews</button>
                </div>
            </div>
        </div>
    )
}
export default News;