import React from 'react'
import './index.css';


export default function View({ value, selected }) {
    return (
        <div className={selected ? "tab-selected tab" : "tab"}>
            {value}
        </div >
    )
}
