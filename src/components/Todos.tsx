import Todo from "../models/todo";
import TodoItem from "./TodoItem";
import css from "../css/Todos.module.css";

const Todos: React.FC<{ items: Todo[]; onRemoveToDo: (id: string) => void }> = (props) => {
    return (
        <ul className={css.todos}>
            {props.items.map((item) => (
                <TodoItem key={item.id} text={item.text} onRemoveTodo={props.onRemoveToDo.bind(null, item.id)}></TodoItem>
            ))}
        </ul>
    );
};

export default Todos;
