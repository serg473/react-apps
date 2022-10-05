import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addNews, addPost, updateText} from "./Redux/state";
import DialogsItem from "./components/Content/Dialogs/DialogsItem/DialogsItem";
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App updateText = {updateText} newPostText = {state.profile} addNews = {addNews} addPost = {addPost} state = {state}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();