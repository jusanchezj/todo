import React from 'react';
import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { CreateTodoButton } from '../CreateTodoButton';
import { TodoItem } from '../TodoItem';
import { TodosLoading } from '../TodosLoading';
import { TodosError } from '../TodosError';
import { TodosEmpty } from '../TodosEmpty';
import TodoForm from '../TodoForm';

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedTodos;
  
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedTodos = initialValue;
        } else {
          parsedTodos = JSON.parse(localStorageItem);
        }
  
        setItem(parsedTodos);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false);
      }
    },2000 );
  }, [itemName, initialValue]); // Agregamos las dependencias aquí (aqui solo se ejecuta el efecto una vez)

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem, loading, error];
}

function App() {
  const [todos, saveTodos, loading, error] = useLocalStorage('TODOS_V1', []);
  const [searchValue, setSearchValue] = React.useState('');
  const [showForm, setShowForm] = React.useState(false);
  const completedTodos = todos.filter((todo) => todo.completed).length;
  const totalTodos = todos.length;

  const filteredTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const completeTodo = (text) => {
    const todoIndex = todos.findIndex((todo) => todo.text === text);
    const newTodos = [...todos];
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed;
    saveTodos(newTodos);
  };

  const deleteTodo = (text) => {
    const newTodos = todos.filter((todo) => todo.text !== text);
    saveTodos(newTodos);
  };

  const addTodo = (todo) => {
    saveTodos([...todos, todo]);
    setShowForm(false);
  };

  return (
    <React.Fragment>
      <TodoCounter completed={completedTodos} total={totalTodos} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />

      <TodoList>
        {loading && <><TodosLoading/> <TodosLoading/> <TodosLoading/></>}
        {error && <TodosError/>}
        {(!loading && filteredTodos.length <= 0) && <TodosEmpty/>}
        {filteredTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDelete={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

      {showForm && <TodoForm onAddTodo={addTodo} onCloseForm={() => setShowForm(false)} />}

      <CreateTodoButton onClick={() => setShowForm(true)} />


    </React.Fragment>
  );
}

export default App;
