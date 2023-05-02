import { useState } from 'react'
import TodoCounter from './components/TodoCounter'
import TodoSearch from './components/TodoSearch'
import CreateTodoButton from './components/CreateTodoButton'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

//import './App.css'
const defaultTodos = [
  { text: 'Estudiar react', completed: false },
  { text: 'Estudiar vue', completed: false },
  { text: 'Estudiar angular', completed: false }
]


function App() {

  const [todos, setTodos] = useState(defaultTodos)
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  let searchedTodos = [];

  if(!searchValue.length>=1){
    searchedTodos = todos
  }else{
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    }) 
  }

  const completeTodo = (text) => { 
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      todos[todoIndex].completed = true
      setTodos(newTodos)
   }

   const deleteTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    setTodos(newTodos)
 }

  return (
    <>
      <TodoCounter 
        total = {totalTodos}
        completed = {completedTodos}
      />    
      <TodoSearch
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      />
      <TodoList>
        {searchedTodos.map(todos =>(
          <TodoItem 
            key={todos.text} 
            text={todos.text} 
            completed={todos.completed}
            onComplete={() => completeTodo(todos.text)}
            onDelete={() => deleteTodo(todos.text)}
            
          />
        ))}
      </TodoList>
      <CreateTodoButton />  
    </>
  ) 
}

export default App
