import React from "react";
import classes from './Post.module.css'

const Post = (props) => {
  return (
    <div className={classes.posts}>
      <div>{props.message}</div>
      <div>likes {props.likeCount}</div>
    </div>
  )
}

export default Post