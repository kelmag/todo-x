import React from 'react'


export default function View() {
    return (
        <div>
            <div className="header">
                <div className="top-bar">
                    <span className="right-label"></span>
                    <span className="center-label"></span>
                    <span className="left-label"></span>
                </div>
                <div className="title">To Do List</div>
            </div>
            <div className="menu-bar">
                <ul className="tabs">
                    <li className="tab" id="todo">To Do</li>
                    <li className="tab" id="done">Done</li>
                </ul>
                <button className="config-button" id="config-button"><span role="img" aria-label="config">⚙️</span></button>
            </div>
            <div className="tasks-todo">
                <div className="task-line">task one</div>
                <div className="task-line">task two</div>
                <div className="task-line">task three</div>
            </div>
            <div className="tasks-done">
                <div className="task-line">task one</div>
                <div className="task-line">task two</div>
                <div className="task-line">task three</div>
            </div>
        </div>
    )
}
