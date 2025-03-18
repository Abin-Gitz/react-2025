import React from 'react';
import './button.css';

const button = ({ text='Click', bgColor, color }) => {
  return (
    <button style={{ backgroundColor: bgColor, color: color }} className="btn">
      {text}
    </button>
  );
};

export default button;
