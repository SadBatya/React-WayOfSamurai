import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'Hi. how are you?', likesCount: 12},
    {id: 2, message: 'It`s My first post', likesCount: 10},
  ]
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name='' id='' cols='30' rows='5'></textarea>
        </div>
        <button>add post</button>
      </div>
      <div className={classes.posts}>
        <Post message={postsData[0].message} likeCount={postsData[0].likesCount} />
        <Post message={postsData[1].message} likeCount={postsData[1].likesCount} />
      </div>
      <button>remove</button>
    </div>
  );
};

export default MyPosts;
