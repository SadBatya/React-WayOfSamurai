import React from "react";
import classes from './Navbar.module.css'

const Navbar = () => {
  return(
    <nav className={classes.nav}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Circle-icons-rocket.svg/1200px-Circle-icons-rocket.svg.png" alt="" />
      <p className={classes.item}>SalamMaleykum</p>
    </nav>
  )
}

export default Navbar