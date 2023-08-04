import React from 'react';
import './CreateTodoButton.css';

function CreateTodoButton({ onClick }) {
  return( 
    <button className='CreateTodoButton' onClick={onClick}>
      <span className='CloseIcon'>+</span>
    </button>
  );
}

export { CreateTodoButton };