import { useState } from "react";
import Todos from "./components/Todos";
import Todo from "./models/todo";
import NewTodo from "./components/NewTodo";

function App() {
    const [todos, setToDos] = useState<Todo[]>([]);
    const onAddTodoHandler = (text: string) => {
        const newTodo = new Todo(text);
        setToDos((prevTodos) => {
            return prevTodos.concat(newTodo);
        });
    };
    const onRemoveToDoHandler = (id: string) => {
        setToDos((prevTodos) => {
            return prevTodos.filter((todo) => todo.id !== id);
        });
    };
    return (
        <div className="App">
            <NewTodo onAddToDo={onAddTodoHandler}></NewTodo>
            <Todos items={todos} onRemoveToDo={onRemoveToDoHandler}></Todos>
        </div>
    );
}

export default App;
