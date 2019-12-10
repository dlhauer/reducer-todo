import React from 'react';

function Todo(props) {
  return (
    // <h2>Todo</h2>
    <div className='todo'>
      <p>{props.todo.item}</p>
    </div>
  )
}

export default Todo;