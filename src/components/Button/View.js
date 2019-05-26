import React from 'react'


export default function View({ value, className, id }) {
    return (
        <button className={className} id={id}>
            <span role="img" aria-label="config">{value}</span>
        </button>
    )
}
