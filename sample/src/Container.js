import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import './Container.css';

const Container = () => {
    const [list, setList] = useState([
        { id: 1, checked: false, label: "Do yoga", time: "5:00am" },
        { id: 2, checked: false, label: "Study", time: "7:00am" },
        { id: 3, checked: false, label: "work", time: "9:00am" },
        { id: 4, checked: false, label: "Exercise", time: "5:30pm" },
        { id: 5, checked: false, label: "Coding", time: "8:00pm" },
    ]);

    const [filter, setFilter] = useState("");

    const handleChange = (id) => {
        const updatedList = list.map((item) =>
            item.id === id ? { ...item, checked: !item.checked } : item
        );
        setList(updatedList);
    };

    const [newTask, setNewTask] = useState("");
    const [newTime, setNewTime] = useState("");

    const handleAddTask = () => {
        if (newTask.trim() && newTime.trim()) {
            const newTaskObj = {
                id: list.length + 1,
                checked: false,
                label: newTask,
                time: newTime,
            };
            setList([...list, newTaskObj]);
            setNewTask("");
            setNewTime("");
        }
    };

    const handleDelete = (id) => {
        const updatedList = list.filter((item) => item.id !== id);
        setList(updatedList);
    };

    const handleFilterChange = (e) => {
        setFilter(e.target.value);
    };

    const filteredList = list.filter((item) =>
        item.label.toLowerCase().includes(filter.toLowerCase())
    );

    const handleNewTaskChange = (e) => {
        setNewTask(e.target.value);
    };

    const handleNewTimeChange = (e) => {
        setNewTime(e.target.value);
    };

    return (
        <main>
            <h4>Are you excited to completed the following activities</h4>
              <p>Why are you waiting here, Let's Do it.</p>
            <p>Best of luck 🖤</p>
            <div className="new-task-container">
                <input
                    type="text"
                    placeholder="Create new one..."
                    value={newTask}
                    onChange={handleNewTaskChange}
                    className="new-task-input"
                />
                <input
                    type="text"
                    placeholder="Add time here..."
                    value={newTime}
                    onChange={handleNewTimeChange}
                    className="new-task-input"
                />
                <button onClick={handleAddTask} className="add-task-button">
                    Add Task
                </button>
            </div>

            <input
                type="text"
                placeholder="Filter the task..."
                value={filter}
                onChange={handleFilterChange}
                className="filter-input"
            />
            {filteredList.length ? (
                <ul>
                    {filteredList.map((item) => (
                        <li className="item" key={item.id}>
                            <input
                                type="checkbox"
                                onChange={() => handleChange(item.id)}
                                checked={item.checked}
                            />
                            <label
                                style={item.checked ? { textDecoration: 'line-through' } : null}
                            >
                                {item.label}
                            </label>
                            <FaTrash
                                role="button"
                                onClick={() => handleDelete(item.id)}
                                tabIndex="0"
                            />
                            
                            <label className="time">{item.time}</label>
                        </li>
                    ))}
                </ul>
            ) : (
                <p className="completed">Successfully you completed the task today!!</p>
            )}
        </main>
    );
};

export default Container;
