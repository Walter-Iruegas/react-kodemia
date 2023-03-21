import { useState } from "react"
import { v4 as uuidv4 } from 'uuid';
import { TodoItem } from "./TodoItem";
import todosDummy from '../../dummyData/todos.json'
console.log("🚀 ~ file: Todos.js:5 ~ todosDummy:", todosDummy);


const todosIniciales = [
    {
        title:'Todo 1',
        id:uuidv4(),
        priority:'alta',
        creationDate:new Date()
    },{
        title:'Todo 2',
        id:uuidv4(),
        priority:'alta',
        creationDate:new Date()
    },{
        title:'Todo 3',
        id:uuidv4(),
        priority:'alta',
        creationDate:new Date()
    },{
        title:'Todo 4',
        id:uuidv4(),
        priority:'alta',
        creationDate:new Date()
    },{
        title:'Todo 5',
        id:uuidv4(),
        priority:'alta',
        creationDate:new Date()
    }
]

export const Todos = () => {

    

    const [todoTitle, setTodoTitle] = useState('');
    const [todosList, setTodosList] = useState(todosDummy.todos);

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

        

        // Crear Nuevo Objeto TODO para agregar a la lista
        const newTodo = {
            title: todoTitle,
            id:uuidv4(),
            priority:'alta',
            creationDate:new Date()
        }
        
        
        // Forma directa de cambiar el state
        setTodosList([...todosList, newTodo]);
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
                            key={todo.id} 
                            id={todo.id} 
                            title={todo.title} // "todo 1", "todfo 2"
                            onDeleteButtonClick = {deleteTodoFromList}
                        />
                        // return <p key={uuidv4()}> {todo}  </p>
                    })
                }

            </div>
        

        </div>
    )
}

// todo1
    // {
    //     title:'Todo 4',
    //     id:uuidv4(),
    //     priority:'alta',
    //     creationDate:'09/03/2022'
    // }