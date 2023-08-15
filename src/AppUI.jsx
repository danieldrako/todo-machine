import {TodoCounter} from './components/TodoCounter'
import {TodoSearch} from './components/TodoSearch'
import CreateTodoButton from './components/CreateTodoButton'
import TodoList from './components/TodoList'
import TodoItem from './components/TodoItem'



function AppUI({
    completedTodos,
    totalTodos,
    searchValue,
    setSearchValue,
    searchedTodos,
    completeTodo,
    deleteTodo
}) {
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

export {AppUI}