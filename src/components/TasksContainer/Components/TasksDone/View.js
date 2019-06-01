import React from 'react'
import "./index.css"
import TaskLine from '../TaskLine';

export default function View() {
    return (
        <div className="tasks-done">
            <TaskLine value="lorem ipsum is a dummy text ..." tag='IMP' />
            <TaskLine value="lorem ipsum is a dummy text ..." tag='ASAP' />
            <TaskLine value="lorem ipsum is a dummy text ..." tag='URG' />
        </div>
    )
}
