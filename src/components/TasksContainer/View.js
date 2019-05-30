import React from 'react'
import "./index.css"



export default function View({ children }) {
    return (
        <div className="tasks-container">
            {children}
        </div>
    )
}
