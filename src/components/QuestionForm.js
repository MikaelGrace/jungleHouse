import {useState} from 'react'

function QuestionForm() {
    const [inputValue, setInputValue] = useState('Ask your questions here')
    function checkValue(value) {
        if (!value.includes('f')) {
            setInputValue(value)
        }
    }
    return (
        <div>
            <textarea
                value={inputValue}
                onChange={(e) => checkValue(e.target.value)}
            />
            <button onClick={() => alert(inputValue)}>Alert me 🚨</button>
        </div>
    )
}



export default QuestionForm