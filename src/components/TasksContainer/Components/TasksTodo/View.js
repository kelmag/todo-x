import React from 'react'
import "./index.css"
import TaskLine from '../TaskLine';
import TaskAdd from '../TaskAdd';


export default function View() {
    return (
        <div className="tasks-todo">
            <TaskLine value="lorem ipsum is a dummy text ..." tag='IMP' />
            <TaskLine value="lorem ipsum is a dummy text ..." tag='URG' />
            <TaskLine value="lorem ipsum is a dummy text ..." tag='IDK' />
            <TaskLine value="lorem ipsum is a dummy text ..." tag='LOW' />
            <TaskAdd value="lorem ipsum is a dummy text ..." tag='LOW' />
        </div>
    )
}
