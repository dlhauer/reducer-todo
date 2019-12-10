import React, {useReducer} from 'react';
import logo from './logo.svg';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';

import {reducer, initialState} from './reducers/todoReducer';
import './App.css';

function App() {
  const [todos, dispatch] = useReducer(reducer, initialState);
  console.log(todos);
  return (
    <div className="App">
      <h1>Dan's To-do List That He'll Never Actually Do</h1>
      <TodoForm dispatch={dispatch}/>
      <TodoList todos={todos}/>
    </div>
  );
}

export default App;
