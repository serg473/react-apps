import s from './App.module.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import React from "react";
import FriendsContainer from "./components/Friends/FriendsContainer";


const App = () => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <div className={s.wrapper_block}>
                <FriendsContainer/>
                <Content />
            </div>
        </div>
    )
}

export default App;
