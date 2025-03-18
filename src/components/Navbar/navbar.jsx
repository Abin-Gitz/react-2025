import React from 'react';
import './navbar.css';

const navbar = (props) => {
  return (
    <nav>
      <h1>{props.text}</h1>
      <div className="navrigth">
        <p>Menu</p>
        <p>Home</p>
        <p>About</p>
        <p>Contact US</p>
      </div>
    </nav>
  );
};

export default navbar;
