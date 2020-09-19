import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { TaskListContext } from './contexts/taskListContext'

const Task = ({ task }) => {
    const { deleteTask, editTask } = useContext(TaskListContext);
    return (
        <li className="list-item" key={task.id}>
            <span>{task.name}</span>
            <div>
                <button className="btn-edit task-btn" onClick={() => editTask(task.id)}>
                    <i className="fas fa-pen"></i>
                </button>
                <button className="btn-delete task-btn" onClick={() => deleteTask(task.id)}>
                    <i className="fas fa-trash-alt"></i>
                </button>
            </div>
        </li>
    );
}

Task.propTypes = {
    task: PropTypes.object.isRequired
}

export default Task;

