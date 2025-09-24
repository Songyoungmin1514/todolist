function InputForm({inputValue, setInputValue, addTodo}) {
    return(
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
    )
}

export default InputForm