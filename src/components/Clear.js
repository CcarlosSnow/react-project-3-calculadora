import React from 'react';
import '../css/Clear.css';

const Clear = (props) => (
  <div className='button-clear' onClick={props.handleClick}>
    {props.children}
  </div>
);

export default Clear;
