import s from './App.module.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import React from "react";
import Friends from "./components/Friends/Friends";


const App = (props) => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <div className={s.wrapper_block}>
                <Friends stateFriends={props.store.getState().friends.friendsData}/>
                <Content store = {props.store}/>
            </div>
        </div>
    )
}

export default App;
