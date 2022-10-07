import s from './App.module.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import React from "react";
import Friends from "./components/Friends/Friends";
import {updateText} from "./Redux/state";

const App = (props) => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <div className={s.wrapper_block}>
                <Friends stateFriends={props.state}/>
                <Content updateNewsText = {props.updateNewsText} updateText = {updateText} newPostText = {props.newPostText} addNews = {props.addNews} addPost = {props.addPost} state = {props.state}/>
            </div>
        </div>
    )
}

export default App;
