import './App.css';
import Lists from './component/Lists';
import Form from "./component/Form";
import {useState} from "react";

export default function App(){

    let [todoData, setTodoData] = useState([]);
    let [value, setValue] = useState("");

    const handleSubmit = e => {
        e.preventDefault();

        let newTodo = {
            id: Date.now(),
            title: value,
            completed: false
        }
        setTodoData(prev => [...prev, newTodo]);
        setValue('');
    };

    return(
        <div className="flex items-center justify-center w-screen h-screen bg-blue-100">
            <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
                <div className="flex justify-between mb-3 font-bold">
                    <h1>할 일 목록</h1>
                </div>
                <Lists todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            </div>
        </div>
    )
}