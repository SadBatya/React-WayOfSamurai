import React from 'react';
import styles from './Button.module.css';

function Button({ onClick, children }) {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        onClick();
      }}
    >
      {children}
    </button>
  );
}

export default function Toolbar() {
  return (
    <div
      className={styles.Toolbar}
      onClick={() => {
        alert('You clicked on the toolbar');
      }}
    >
      <Button onClick={() => alert('Playing!')}> Play Movie </Button>
      <Button onClick={() => alert('Uploading!')}> Upload Image </Button>
    </div>
  );
}
