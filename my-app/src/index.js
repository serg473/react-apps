import React from 'react';
import ReactDOM from 'react-dom/client';
import state, {subscribe} from "./Redux/state";
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addNews, addPost, updateText, updateTextNews} from "./Redux/state";
const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) =>{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App updateNewsText = {updateTextNews} updateText = {updateText} newPostText = {state.profile} addNews = {addNews} addPost = {addPost} state = {state}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();

subscribe(rerenderEntireTree);
rerenderEntireTree(state);

reportWebVitals();
