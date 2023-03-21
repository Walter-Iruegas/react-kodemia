import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from "./TodoItem";

export const Todos = () => {

    const [todoTitle, setTodoTitle] = useState('');
    const [todosList, setTodosList] = useState([]);

    const onTextChangeSetTodoTitle = (event) => {
        const value = event.target.value;
        setTodoTitle(value);
    }

    const onTodoTitleFormSubmit = (event) => {
        event.preventDefault();

        // Forma larga de cambiar el state
        // const titutloTodo = todoTitle;
        // const newTodosList = [...todosList, titutloTodo]
        // setTodosList(newTodosList);

        // Forma directa de cambiar el state

            
        setTodosList([...todosList, todoTitle]);
        setTodoTitle('')
       
    }

    // eliminar es todo1
    // todo 4

    const deleteTodoFromList = (todoText) => {
        const filteredTodos = todosList.filter((todo) => {
            if(todoText !== todo)
                return todo;
        });

        setTodosList(filteredTodos);

        // [todo2, todo3, todo4]
    }

    return (
        <div className="container">
            
            <h1>Todo List</h1>
            {/* Input para agregar Todos */}
            <form action="#" className="form-container" onSubmit={onTodoTitleFormSubmit}>
                <input 
                    type="text" 
                    onChange={onTextChangeSetTodoTitle}
                    value={todoTitle}
                    className="input-text"/>
                    <input type="submit" className="addSubmit" value="Agregar" />
            </form>
            

            <div className="todosList">
                {
                    todosList.map((todo) => {
                        return <TodoItem 
                            key={uuidv4()} 
                            id={uuidv4()} 
                            title={todo}
                            onDeleteButtonClick = {deleteTodoFromList}
                        />
                        // return <p key={uuidv4()}> {todo}  </p>
                    })
                }

            </div>
        

        </div>
    )
}