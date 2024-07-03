import { useRef } from "react";
import css from "../css/NewToDo.module.css";

const NewTodo: React.FC<{ onAddToDo: (text: string) => void }> = (props) => {
    const todoTextInputRef = useRef<HTMLInputElement>(null);
    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault();
        const enteredText = todoTextInputRef.current!.value;

        if (enteredText?.trim().length === 0) {
            return;
        }
        props.onAddToDo(enteredText);
    };
    return (
        <form onSubmit={submitHandler} className={css.form}>
            <label htmlFor=""></label>
            <input type="text" id="text" ref={todoTextInputRef} />
            <button>Add to do</button>
        </form>
    );
};

export default NewTodo;
