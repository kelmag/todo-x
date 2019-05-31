import React from 'react'
import "./index.css"
import Checkbox from '../../../../icon/Checkbox';

export default function View({ value }) {
    return (
        <div className="task-line">
            <Checkbox />
            <div className="task-text" >
                {value}
            </div>
        </div>
    )
}
