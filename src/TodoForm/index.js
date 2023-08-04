import React from 'react';
import './TodoForm.css';

function TodoForm({ onAddTodo, onCloseForm }) {
  const [text, setText] = React.useState('');

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (text.trim() !== '') {
      onAddTodo({ text, completed: false });
      setText('');
    }
  };

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input
        className="TodoForm-input"
        type="text"
        value={text}
        onChange={handleTextChange}
        placeholder="Ingresa una nueva tarea"
      />
      <button className="TodoForm-button" type="submit">Agregar</button>
      <button className="TodoForm-button" type="button" onClick={onCloseForm}>Cancelar</button>
    </form>
  );
}

export default TodoForm;