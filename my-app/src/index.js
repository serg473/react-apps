import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/redux-store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = () => {
    debugger;
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <Provider store = {store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </React.StrictMode>
    );
}
reportWebVitals();


rerenderEntireTree();
store.subscribe(() => {
    rerenderEntireTree();
});

reportWebVitals();
