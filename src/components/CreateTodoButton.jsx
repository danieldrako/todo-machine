

import '../styles/CreateTodoButton.css'
const CreateTodoButton = () => {
  return (
    <button
      className='CreateTodoButton'
      onClick={ ()=>console.log('hola') }
    >
      <span className='CreateTodoButton-in' >+</span>
      
    </button>
  )
}

export default CreateTodoButton