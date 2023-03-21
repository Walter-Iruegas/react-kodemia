import './todoItem.css';
export const TodoItem = ({title, id, onDeleteButtonClick}) => {
console.log("🚀 ~ file: TodoItem.js:3 ~ TodoItem ~ id:", id);

    const onBorrarButtonClick = () => {
        onDeleteButtonClick(title)
    }


    return (
        <div className="todo">
            {title}
            <div className="actions">
                <button>Completar</button>
                <button onClick={onBorrarButtonClick}>Borrar</button>
            </div>
        </div>
    )
}