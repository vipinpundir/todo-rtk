import React from 'react';
import TodoItem from './TodoItem';
import { useGetTodosQuery } from '../api/todoApi';

const TodoList = () => {

    const {data: todos, isLoading} = useGetTodosQuery()

  return (
    <div className="todo-list">
     {isLoading 
     ?<p>Loading...</p>
     : <>  {todos?.map(todo => (
      <TodoItem key={todo.id} todo={todo} />
    ))} </>}
    </div> );
};

export default TodoList;
