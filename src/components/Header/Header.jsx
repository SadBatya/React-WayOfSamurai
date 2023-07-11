import React from 'react';
import classes from './Header.module.css'



const Header = (props) => {
  return <header className={classes.header}>{props.name} {props.age}</header>;
};


export default Header