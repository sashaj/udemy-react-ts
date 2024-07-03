import Todo from "../models/todo";
import css from "../css/ToDoItem.module.css";

const TodoItem: React.FC<{ text: string; onRemoveTodo: () => void }> = (props) => {
    return (
        <li className={css.item} onClick={props.onRemoveTodo}>
            {props.text}
        </li>
    );
};

export default TodoItem;
