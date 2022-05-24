import { useState } from 'react';
import './HomePage.scss';

const HomePage = () => {
    let [name, setName] = useState('');
    let [todos, setTodos] = useState([
        { id: 1, title: "Huy Hoang" },
        { id: 2, title: "Huy Hoang Handsome" },
        { id: 3, title: "Tran Huy Hoang" },
    ]);
    let handleChangeInput = (event) => {
        setName(event.target.value);
    }
    let handleClickButton = (event) => {
        if (!name) {
            alert('Please enter title');
            return;
        }
        let copyName = { id: 'abc', title: name };
        setTodos([...todos, copyName]);
        setName('');
    }
    return (
        <div className="home-page">
            <h2>Make a to do list with Huy Hoang Handsome</h2>
            <div className="list-todo">
                {todos && todos.length > 0 &&
                    todos.map((todo, index) => {
                        return (
                            <div className="list" key={todo.id}>
                                <span className="stt">{index + 1} -</span>{todo.title}
                            </div>
                        )
                    })}
            </div>
            <input className="name-todo" value={name} onChange={(event) => handleChangeInput(event)} />
            <button className="add-todo" onClick={(event) => handleClickButton(event)}>Add</button>
        </div>
    )
}
export default HomePage;