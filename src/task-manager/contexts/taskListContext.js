import React, { useState, createContext, useEffect } from 'react';
import { v4 as uuid } from 'uuid';

export const TaskListContext = createContext();

const TaskContextProvider = (props) => {
    const initialState = JSON.parse(localStorage.getItem('tasklist')) || [];

    const [tasks, setTask] = useState(initialState);

    useEffect(() => {
        localStorage.setItem('tasklist', JSON.stringify(tasks))
    }, [tasks]);

    const [editItem, setEditItem] = useState(null);

    const addTask = (name) => {
        setTask([...tasks, { id: uuid(), name }])
    }
    const deleteTask = id => {
        setTask(
            tasks.filter(task => task.id !== id)
        )
    }

    const editTask = taskId => {
        const item = tasks.find(task => task.id === taskId);
        setEditItem(item);
    }

    const updateTask = (updatedTask) => {
        setTask(
            tasks.map(task => (task.id === updatedTask.id ? updatedTask : task))
        );
        setEditItem(null);
    }

    const clearTask = () => {
        setTask([])
    }

    return (
        <TaskListContext.Provider value={{ tasks, addTask, deleteTask, clearTask, editTask, updateTask, editItem }}>
            {props.children}
        </TaskListContext.Provider>
    );
}

export default TaskContextProvider;