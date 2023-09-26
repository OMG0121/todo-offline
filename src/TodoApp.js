import React, { useContext, useState } from 'react';
import { TodoContext } from './TodoContext';

const TodoApp = () => {
  const { todos, setTodos } = useContext(TodoContext);
  const [newTodo, setNewTodo] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() === '') return;
    const newTodoItem = { text: newTodo, completed: false, id: Date.now() };
    setTodos([newTodoItem, ...todos]);
    setNewTodo('');
  };

  const toggleComplete = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const handleReset = () => {
    setTodos([]);
  };

  return (
    <div>
      <button onClick={handleReset}>Reset</button>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="Add Todo"
        />
      </form>
      <ul>
        {todos
          .sort((a, b) => (a.completed === b.completed ? 0 : a.completed ? 1 : -1))
          .map((todo) => (
            <li
              key={todo.id}
              onClick={() => toggleComplete(todo.id)}
              style={{
                textDecoration: todo.completed ? 'line-through' : 'none',
              }}
            >
              {todo.text}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default TodoApp;
