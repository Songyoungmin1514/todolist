function TodoList({todos, deleteTodo}) {
    return(
        <div className='todoList'>
            <h2 className='listTitle'>할 일</h2>
            <ul className='checkList'>
                {todos.map((todo,i) => {
                    return(
                    <li key={i} className='todoItem'>
                        <input type="checkbox" />
                        <p className='checkFont'>{todo}</p>
                        <button className='deleteBtn' onClick={() => {deleteTodo(i)}}>x</button>
                    </li>)
            })}
            </ul>
        </div>
    )
}

export default TodoList