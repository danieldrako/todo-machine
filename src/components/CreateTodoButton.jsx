

import '../styles/CreateTodoButton.css'
const CreateTodoButton = () => {
  return (
    <button
      className='CreateTodoButton'
      onClick={ ()=>console.log('hola') }
    >
      este es un boton
    </button>
  )
}

export default CreateTodoButton