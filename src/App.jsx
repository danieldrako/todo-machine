import { useState } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import CreateTodoButton from './components/CreateTodoButton'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

//import './App.css'
const todos = [
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar vue', completed: false },
  { text: 'Estudiar angular', completed: false }
]


function App() {

  return (
    <>
      <TodoCounter />    
      <TodoSearch />
      <TodoList>
        <p>Esto es parte de el todo List</p>
        <p>Prueba para pasarlo como children</p>
        {todos.map(todo =>(
          <TodoItem key={todo.text} text={todo.text} />
        ))}
      </TodoList>
      <CreateTodoButton />  
    </>
  ) 
}

export default App
