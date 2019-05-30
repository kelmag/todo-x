import React from 'react'
import "./index.css"
import TaskLine from '../TaskLine';


export default function View() {
    return (
        <div className="tasks-todo">
            <TaskLine value="lorem ipsum is a dummy text ..." />
            <TaskLine value="lorem ipsum is a dummy text ..." />
            <TaskLine value="lorem ipsum is a dummy text ..." />
        </div>
    )
}
