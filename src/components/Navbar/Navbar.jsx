import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
  return(
    <div className={classes.nav}>
      <div className={classes.item}>
        <a href="/profile">Profile</a>
      </div>
      <div className={classes.item}>
        <a href="/dialogs">Message</a>
      </div>
      <div className={classes.item}>
        <a href="/news">News</a>
      </div>
      <div className={classes.item}>
        <a href="/music">Music</a>
      </div>
      <div className={classes.item}>
        <a href="/settings">Settings</a>
      </div>
    </div>
  )
}

export default Navbar