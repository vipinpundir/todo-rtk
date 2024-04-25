// TodoApp.js
import React from 'react';
import './App.css';
import TodoList from './components/TodoList.jsx';
import AddTodoForm from './components/AddTodoForm.jsx';

const TodoApp = () => {

  return (
    <div className="todo-app">
      <h1>Todo App with RTK Query</h1>
      <AddTodoForm/>
      <TodoList/>
    </div>
  );
};

export default TodoApp;
