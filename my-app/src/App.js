import s from './App.module.css';
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import DialogsItem from "./components/Content/Dialogs/DialogsItem/DialogsItem";
import React from "react";

const App = (props) => {
    return (
        <div className={s.wrapper}>
            <Header/>
            <Content dialog={props.dateProps}/>
        </div>
    )
}

export default App;
