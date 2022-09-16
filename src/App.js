import './App.css';
import Lists from './component/Lists';
import Form from "./component/Form";
import {useState, useCallback} from "react";

const initialTodoData = localStorage.getItem("todoData") ? JSON.parse(localStorage.getItem("todoData")) : []

export default function App(){
    let [todoData, setTodoData] = useState(initialTodoData);
    let [value, setValue] = useState("");

    const handleClick = useCallback((id) => {
        let newTodoData = todoData.filter(data => data.id !== id)
        setTodoData(newTodoData);
        localStorage.setItem('todoData', JSON.stringify(newTodoData));
    },[todoData]);

    const handleSubmit = e => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        }
        setTodoData(prev => [...prev, newTodo]);
        localStorage.setItem('todoData', JSON.stringify([...todoData, newTodo]));
        setValue('');
    };

    const handleRemoveClick = () => {
        setTodoData([]);
        localStorage.setItem('todoData', JSON.stringify([]));
    };

    return(
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3 font-bold">
                    <h1>할 일 목록</h1>
                    <button onClick={handleRemoveClick}>Delete All</button>
                </div>
                <Lists handleClick={handleClick} todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            </div>
        </div>
    )
}