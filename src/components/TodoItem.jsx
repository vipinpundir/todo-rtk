import React from 'react';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../api/todoApi';

const TodoItem = ({ todo }) => {

  const [deleteTodo] = useDeleteTodoMutation();
  const [updateTodo] = useUpdateTodoMutation();


  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleCheckboxChange = () => {
    updateTodo({ id: todo.id, completed: !todo.completed });
  };

  return (
    <div className="todo-item">
      <input type="checkbox" checked={todo.completed} onChange={handleCheckboxChange} />
      <span className="title">{todo.title}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default TodoItem;
