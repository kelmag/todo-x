import React from 'react'

export default function View({ labels }) {
    return (
        <div>
            {(labels && labels[0]) ? <span className="right-label">{labels[0]}</span> : null}
            {(labels && labels[1]) ? <span className="center-label">{labels[1]}</span> : null}
            {(labels && labels[2]) ? <span className="f-label">{labels[2]}</span> : null}
        </div>
    )
}
