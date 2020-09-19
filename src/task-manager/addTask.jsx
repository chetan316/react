import React, { useState, useContext, useEffect, useRef } from 'react';
import { TaskListContext } from './contexts/taskListContext';

const AddTask = () => {
    const [task, setTask] = useState('');
    const { editItem, updateTask, addTask, clearTask } = useContext(TaskListContext);
    const addTaskInputRef = useRef();

    const handleSubmit = e => {
        e.preventDefault();
        if (editItem) {
            updateTask({ name: task, id: editItem.id })
        }
        else {
            addTask(task);
        }
        setTask('');
    }

    const clearTaskList = e => {
        e.preventDefault();
        clearTask();
    }

    useEffect(() => {
        addTaskInputRef.current.focus();
        if (editItem) {
            setTask(editItem.name)
        }
    }, [editItem]);

    return (
        <form onSubmit={handleSubmit} className="form">
            <input type="text"
                className="task-input"
                value={task}
                placeholder="Add Task"
                required
                onChange={e => { setTask(e.target.value) }}
                ref={addTaskInputRef} />
            <div className="buttons">
                <button type="submit" className="btn add-task-btn">{editItem ? 'Update' : 'Add'}</button>
                <button className="btn clear-btn" onClick={clearTaskList}>Clear</button>
            </div>
        </form>
    );
}

export default AddTask;