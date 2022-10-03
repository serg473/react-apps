import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addPost} from "./Redux/state";
import DialogsItem from "./components/Content/Dialogs/DialogsItem/DialogsItem";

export let rerenderEntireTree = (state) =>{
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App addPost = {addPost} state = {state}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();