import React from 'react'
import "./index.css";
import Settings from '../../icon/Settings';
import Home from '../../icon/Home';
import Add from '../../icon/Add';

export default function View({ value, id }) {
    return (
        <button className="button" id={id}>
            <span role="img" aria-label="config">
                {renderSwitch(value)}
            </span>
        </button>
    )
}

const renderSwitch = (value) => {
    switch (value) {
        case "settings":
            return <Settings />
        case "home":
            return <Home />
        case "add":
            return <Add />
        case "remove":
            return <Home />
        case "archive":
            return <Home />

        default:
            return value;
    }
}