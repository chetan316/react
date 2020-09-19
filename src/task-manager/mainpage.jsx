import React from 'react';
import './taskManager.css';
import TaskList from './taskList';
import TaskListContextProvider from './contexts/taskListContext';
import Header from "./header";
import AddTask from './addTask';

const MainPage = () => {
    return (
        <TaskListContextProvider>
            <div className="container">
                <div className="app-wrapper">
                    <Header />
                    <div className="main">
                        <AddTask />
                        <TaskList />
                    </div>
                </div>
            </div>
        </TaskListContextProvider>
    );
}

export default MainPage;

