import { useState } from 'react'
import { AppUI } from './AppUI';
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
  <AppUI 
    completedTodos = {completedTodos} 
    totalTodos =    {totalTodos }
    searchValue =  { searchValue }
    setSearchValue = {setSearchValue }
    searchedTodos = {searchedTodos} 
    completeTodo =  {completeTodo} 
    deleteTodo = {deleteTodo}
  />
 );

}

export default App
