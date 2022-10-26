import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from './Redux/store';
import reduxStore from "./Redux/redux-store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App dispatch={store.dispatch.bind(store)} store={store}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();


rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
