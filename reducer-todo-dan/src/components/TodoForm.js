import React, {useState} from 'react';

function TodoForm(props) {
  const [todo, setTodo] = useState('');

  const handleChange = e => {
    setTodo(e.target.value);
  }

  const handleSubmit = e => {
    e.preventDefault();
    props.dispatch({type: 'ADD', payload: todo})
    setTodo('')
  }

  console.log(todo);

  return (
    <form 
      className='todo-form'
      onSubmit={handleSubmit}
    >
      <input
        placeholder='add a todo item'
        name='todo'
        onChange={handleChange}
        value={todo}
      />
      <button>add</button>
      <button className='clear-btn'>Clear completed</button>
    </form>
  )
}

export default TodoForm;