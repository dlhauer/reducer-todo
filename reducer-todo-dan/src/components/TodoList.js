import React from 'react';
import Todo from './Todo';

function TodoList(props) {
  return (
    <div>
      {/* <h2>TodoList</h2> */}
      {props.todos.map( item => (
        <Todo key={item.id} todo={item} dispatch={props.dispatch}/>
      ))}
      {/* <Todo/> */}
    </div>
  )
}

export default TodoList;