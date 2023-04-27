import '../styles/TodoCounter.css';

const TodoCounter = ({total, completed}) => {

  return (
    <div className='TodoCounter'>
      <h2 className='text' >Has completado {completed} de {total} TODOs</h2>
    </div>
  )
}

export default TodoCounter