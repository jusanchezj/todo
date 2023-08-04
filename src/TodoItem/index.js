import './TodoItem.css';
import { BsCheck2Circle } from 'react-icons/bs';
import { TiDeleteOutline } from 'react-icons/ti';

function TodoItem(props) {
  return (
    <div className="TodoItemContainer">
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed && "Icon-check--active"}`} onClick={props.onComplete}>
          <BsCheck2Circle />
        </span>
        <p className={`TodoItem-p ${props.completed && "TodoItem-p--complete"}`}>{props.text}</p>
        <span className="Icon Icon-delete" onClick={props.onDelete}>
          <TiDeleteOutline />
        </span>
      </li>
    </div>
  );
}

export { TodoItem };