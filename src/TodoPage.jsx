import { useState } from 'react'
import Header from './Header';
import InputForm from './InputForm';
import TodoList from './TodoList'
import { Link } from 'react-router-dom';

function TodoPage() {
    const dbTodos =  ['최준영 베어버리기', '영준초이 베어버리기', '주녕이한테 무릎차기 꽂아버리기'];
    const [todos,setTodos] = useState(dbTodos);
    const [inputValue,setInputValue] = useState('');

    const addTodo = () => {
        setTodos([inputValue,...todos])
        setInputValue('')
    }
    const deleteTodo = (id) => {
        const newTodos = todos.filter((_, i) => { return id !== i});
        setTodos(newTodos);
    }
    return(
        <>
            <Header />

            <InputForm
                inputValue={inputValue}
                setInputValue={setInputValue}
                addTodo={addTodo}
            />

            <TodoList
                todos={todos}
                deleteTodo={deleteTodo}
            />

            <Link to="/">홈으로 돌아가기</Link>
        </>
    )
}

export default TodoPage