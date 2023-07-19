import React from 'react';
import classes from './MyPost.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
  let postsElements = props.posts.map((p) => (
    <Post message={p.message} likeCount={p.likesCount} />
  ));

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    props.addPost(text);
  };
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPost}>add post</button>
        <button>remove</button>
      </div>
      <div className={classes.posts}>{postsElements}</div>
    </div>
  );
};

export default MyPosts;
