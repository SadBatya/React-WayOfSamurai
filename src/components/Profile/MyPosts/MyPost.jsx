import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post'

const MyPosts = () => {
  return (
    <div>
      <textarea name='' id='' cols='30' rows='5'></textarea>
      <button>add</button>
      <button>remove</button>
    </div>
  );
};

export default MyPosts;
