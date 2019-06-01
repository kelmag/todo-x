import React from 'react'
import "./index.css"
import Checkbox from '../../../../icon/Checkbox';
import Tag from '../../../Tag';
import Button from '../../../Button';
export default function View({ value, tag }) {
    return (
        <div className="task-line">
            <Checkbox />
            <div className="task-text" >
                {value}
            </div>
            <Tag value={tag} />
            <Button value="add" />
        </div>
    )
}
