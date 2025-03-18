import React from 'react';
import './box.css';

const box = props => {
  console.log(props);
  return (
    <div className="box">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
    </div>
  );
};

export default box;
