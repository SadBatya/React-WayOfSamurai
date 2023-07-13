import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = () => {
  let posts = [
    { id: 1, message: 'Hi. how are you?', likesCount: 12 },
    { id: 2, message: 'It`s My first post', likesCount: 10 },
    { id: 3, message: 'BlaBla', likesCount: 15 },
    { id: 4, message: 'BlaBlaBLA', likesCount: 18 },
  ];

  let postsElements = posts.map((p) => (
    <Post message={p.message} likeCount={p.likesCount} />
  ));
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea name='' id='' cols='30' rows='5'></textarea>
        </div>
        <button>add post</button>
        <button>remove</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
