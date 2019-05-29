import React from 'react'
import "./index.css"

export default function View({ value, id }) {
    return (
        <button className="button" id={id}>
            <span role="img" aria-label="config">{value}</span>
        </button>
    )
}
