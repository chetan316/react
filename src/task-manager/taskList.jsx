import React, { useContext } from 'react';
import AddTask from './addTask';
import Task from './task';
import { TaskListContext } from './contexts/taskListContext';



const TaskList = () => {
    const { tasks } = useContext(TaskListContext);
    return (
        <div>
            {/* <AddTask /> */}
            {tasks.length ? (
                <ul className="list">
                    {tasks.map(task => (
                        <Task key={task.id} task={task} />
                    ))}
                </ul>) : (
                    <div className="no-tasks">No Tasks</div>
                )}
        </div>

    );
}

export default TaskList;