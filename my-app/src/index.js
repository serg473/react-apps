import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/store';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App newPostText={store.getState().profile} dispatch={store.dispatch.bind(store)} state={store.getState()}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());

reportWebVitals();
