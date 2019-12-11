import React from 'react';

function Todo(props) {

  const toggleComplete = id => {
    props.dispatch({type: 'TOGGLE_COMPLETE', payload: id})
  }

  return (
    // <h2>Todo</h2>
    <div className='todo'>
      <p 
        className={props.todo.completed ? 'completed' : ''}
        onClick={() => toggleComplete(props.todo.id)}>
          {props.todo.item}
      </p>
    </div>
  )
}

export default Todo;