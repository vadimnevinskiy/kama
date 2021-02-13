import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let dialogs = [
    {id: 0, name: 'Dima'},
    {id: 1, name: 'Vadim'},
    {id: 2, name: 'Katya'},
    {id: 3, name: 'Lena'},
    {id: 4, name: 'Viktor'},
    {id: 5, name: 'Sasha'},
    {id: 6, name: 'Vasya'},
];
let messages = [
    {id: 0, text: 'Lorem ipsum dolor sit amet.'},
    {id: 1, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing.'},
    {id: 2, text: 'Lorem ipsum dolor.'}
];
let posts = [
    {id: 0, text: 'Lorem ipsum dolor sit.', likes: 12},
    {id: 1, text: 'Mecessitatibus numquam obcaecati officia porro quia quis vel.', likes: 1},
    {id: 2, text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.', likes: 2},
    {id: 3, text: 'Consequatur deleniti libero nam.', likes: 334}
];


ReactDOM.render(
  <React.StrictMode>
    <App dialogs={dialogs} messages={messages} posts={posts} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
