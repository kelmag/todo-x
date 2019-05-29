import React from 'react'
import './index.css'

export default function View({ value }) {
    return (
        <div className="title">
            <h2>{value}</h2>
        </div>
    )
}
