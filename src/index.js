import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { addPost, subscribe, updateNewPostText } from './redux/state';
import state from './redux/state';

const root = ReactDOM.createRoot(document.getElementById('root'));
let rerenderEntireTree = (state) => {
  root.render(
    <React.StrictMode>
      <App 
      state={state} 
      addPost={addPost} 
      updateNewPostText={updateNewPostText}/>
    </React.StrictMode>
  );
};

rerenderEntireTree(state)

subscribe(rerenderEntireTree)