import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import DialogsItem from "./components/Content/Dialogs/DialogsItem/DialogsItem";

let newsData = [
    {id: 1, title:'БЕЛАЗ проведет день открытых дверей 24 сентября', description:'Lorem ipsum dolor', datePublish:'13.03.2022'},
    {id: 2, title:'В здании парламента Чехии сократят время и температуру отопления', description:'Lorem ipsum dolor', datePublish:'13.03.2022'},
    {id: 3, title:'Сальдо: референдум в Херсонской области реализует право на самоопределение', description:'Lorem ipsum dolor', datePublish:'13.03.2022'},
    {id: 4, title:'В Бельгии начали отключать освещение на автотрассах', description:'Lorem ipsum dolor', datePublish:'13.03.2022'}
]

let profileData = [
    {id:1, name:'Sergey', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:2, name:'Elena', src: 'https://www.w3schools.com/howto/img_avatar2.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:3, name:'Nastya', src: 'https://www.w3schools.com/howto/img_avatar2.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:4, name:'Masha', src: 'https://www.w3schools.com/howto/img_avatar2.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:5, name:'Dima', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:6, name:'Petr', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
    {id:7, name:'Igor', src: 'https://www.w3schools.com/howto/img_avatar.png', message: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam, suscipit!"},
];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <App dateProps = {profileData}/>
        </BrowserRouter>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
