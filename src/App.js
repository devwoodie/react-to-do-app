import './App.css';
import List from './component/List';
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
        <div className="container">
            <div className="todoBlock">
                <div className="title">
                    <h1>할 일 목록</h1>
                </div>
                <List todoData={todoData} setTodoData={setTodoData}/>
                <Form handleSubmit={handleSubmit} value={value} setValue={setValue}/>
            </div>
        </div>
    )
}