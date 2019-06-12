import React from 'react'
import "./index.css"
import Add from '../../../../icon/Add';

export default function View({ value }) {
    return (
        <div className="task-input-line">
            <Add className="task-icon" />
            <div className="task-text" >
                <input type="text" className='task-input' placeholder="Add a task" />
            </div>
        </div>
    )
}
