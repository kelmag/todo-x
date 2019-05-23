import React from 'react'

export default function View() {
    return (
        <div>
            <div className="header">
                <div className="top-bar">
                    <span className="right-label"></span>
                    <span className="center-label"></span>
                    <span className="left-label"></span>
                </div>
                <div className="title">Settings</div>
            </div>
            <div class="config-container">
                <div className="config-title">
                    <span role="img" aria-label="config">⚙️</span>
                    <span className="" >Settings</span>
                </div>
                <div class="config-line">
                    Dark Mode
                    <span role="img" aria-label="config">👍🏻</span>
                </div>
                <div class="config-line">
                    Archive
                    <span role="img" aria-label="config">👍🏻</span>
                </div>
                <div class="config-line">
                    Done Tasks Timeout
                    <span role="img" aria-label="config">👍🏻</span>
                </div>
            </div>
        </div>
    )
}
