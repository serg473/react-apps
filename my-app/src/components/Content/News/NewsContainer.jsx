import React from "react";
import s from './News.module.css'

import {getAddNewsActionCreater, postNewsTextActionCreater} from "../../../Redux/news-reducer";
import News from "./News";

const NewsContainer = (props) =>{
    let state = props.store.getState();
    let getAddNews = () =>{
        let action  = getAddNewsActionCreater();
        props.store.dispatch(action);
    }
    let postNewsText = (myText) =>{
        let action = postNewsTextActionCreater(myText);
        props.store.dispatch(action);
    }
    return(<News updateNewsText = {postNewsText} addNews = {getAddNews} news = {state.news.newsData} newsTextData = {state.news.newsTextData} />)
}
export default NewsContainer;