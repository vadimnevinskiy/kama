import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter} from "react-router-dom";
import {addMessage, addPost, writingMessage, writingPostMessage} from "./redux/state";

export let rerenderEntireTree = (state) => {
    ReactDOM.render(
        // <React.StrictMode>
        <BrowserRouter>
            <App state={state} addPost={addPost} writingPostMessage={writingPostMessage} addMessage={addMessage} writingMessage={writingMessage} />
        </BrowserRouter>,
        // </React.StrictMode>,
        document.getElementById('root')
    );
}

reportWebVitals();
