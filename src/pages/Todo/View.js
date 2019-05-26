import React from 'react'
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import Button from '../../components/Button';


export default function View() {
    return (
        <div>
            <div className="header">
                <TopBar labels={['first', 'second', 'third']} />
                <Title value='To Do List' />
            </div>
            <div className="menu-bar">
                <ul className="tabs">
                    <li className="tab" id="todo">To Do</li>
                    <li className="tab" id="done">Done</li>
                </ul>
                <Button className="config-button" id="config-button" value='⚙️' />
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
