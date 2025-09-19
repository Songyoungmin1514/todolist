import { useState } from 'react'
import './reset.css'
import './App.css'


function App() {
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


  // console.log(inputValue)
  return (
    <>
      <header>
        <h1>TODO LIST</h1>
      </header>

      <div className='nameInput'>
        <input className='userInput'
                placeholder='할 일을 입력해주세요.'
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value)}}
                onKeyDown={(e) => {e.key === 'Enter' && addTodo()}}
        />
        <button className='addBtn'
                onClick={addTodo}>추가
        </button>
      </div>

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
    </>
  )
}

export default App