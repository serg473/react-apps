import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reduxStore from "./Redux/redux-store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App store={reduxStore}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();


rerenderEntireTree(reduxStore.getState());
reduxStore.subscribe(() => {
    let state = reduxStore.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
