import React from 'react'
import "./index.css";

export default function View({ value }) {
    return (
        <div className={value + ' tag'} >
            <span>
                {value}
            </span>
        </div>
    )
}
