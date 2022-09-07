import React from 'react';
import '../css/Button.css';

const isOperator = (value) => { 
  return isNaN(value) && (value !== '.') && (value !== '=');
};

function Button(props) {
  return (
    <button
      className={`button-container${isOperator(props.children) ? ' button-operator': ''}`}
      onClick={() => props.handleClick(props.children)}>
      {props.children}
    </button>
  );
}

export default Button;
