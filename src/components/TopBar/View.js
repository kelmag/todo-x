import React from 'react'
import './index.css';

export default function View({ labels }) {
    return (
        <div className="top-bar">
            {(labels && labels[0]) ? <span className="label right-label">{labels[0]}</span> : null}
            {(labels && labels[1]) ? <span className="label center-label">{labels[1]}</span> : null}
            {(labels && labels[2]) ? <span className="label left-label">{labels[2]}</span> : null}
        </div>
    )
}
