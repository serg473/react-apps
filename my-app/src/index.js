import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./Redux/redux-store";
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "./StoreContext";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerenderEntireTree = (state) => {
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


rerenderEntireTree(store.getState());
store.subscribe(() => {
    let state = store.getState();
    rerenderEntireTree(state);
});

reportWebVitals();
