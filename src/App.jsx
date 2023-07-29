import { useState } from 'react'
import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import CreateTodoButton from './components/CreateTodoButton'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'

//import './App.css'
{/* //*===========================Todo List================================ */}
// const defaultTodos = [
//   { text: 'Estudiar react', completed: false },
//   { text: 'Estudiar vue', completed: false },
//   { text: 'Estudiar angular', completed: false },
//   { text: 'Estudiar node', completed: false },
//   { text: 'Jugar la saga completa de Resident Evil', completed: false }
// ]
{/* //*=========================================================== */}

//localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos));
//localStorage.removeItem('TODOS_V1')
function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);

  let parsedItem;

  if (!localStorageItem) {
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else {
    parsedItem = JSON.parse(localStorageItem);
  }

  const [item, setItem] = useState(parsedItem);

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return [item, saveItem];
}

function App() {

  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = useState('')

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  //* La doble negación hace que sea un booleano
  const totalTodos = todos.length;

{/* //*<=======================SearchedTodos====================================> */}
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
{/* //*</=========================SearchedTodos=============================/> */}




{/* //*<=======================completeTodo====================================> */}
  const completeTodo = (text) => { 
      const todoIndex = todos.findIndex(todo => todo.text === text)
      const newTodos = [...todos]
      todos[todoIndex].completed = true
      saveTodos(newTodos)
   }
{/* //*</=======================completeTodo====================================/> */}

{/* //*<=======================deleteTodo====================================> */}
   const deleteTodo = (text) => { 
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex,1)
    saveTodos(newTodos)
 }
 {/* //*</=======================deleteTodo====================================/> */}

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
        {/* //!Children-> React transforma todo lo que está dentro de nuestro componente en la propiedad children*/}
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
