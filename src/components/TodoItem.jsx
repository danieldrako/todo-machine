import '../styles/TodoItem.css'
import { CompleteIcon } from './CompleteIcon'
import { DeleteIcon } from './DeleteIcon'
const TodoItem = (props) => {

  const onComplete = () => { 
    alert('Ya completaste el todo' + props.text)
   }
   const onDelete = () => { 
    alert('Borraste el todo' + props.text)
   }

  return (
    <li className="TodoItem">
      <CompleteIcon
        done={props.completed}
        onClick={props.onComplete}
      />
      {/* <span className={`Icon Icon-check ${props.completed && 'Icon-check--active'}`}
      onClick={props.onComplete}
      >
        √
      </span> */}
      <p className={`TodoItem-p ${props.completed ? 'TodoItem-p--complete' : '' }`}>
        {props.text}
      </p>
      <DeleteIcon
        onClick={props.onDelete}
      />
      {/* <span className="Icon Icon-delete"
        onClick={props.onDelete}
      >
        X
      </span> */}
    </li>
  );
}

export default TodoItem