import React from 'react'
import "./index.css";
import Settings from '../../icon/Settings';
import Home from '../../icon/Home';

export default function View({ value }) {
    return (
        <div className="tag" >
            <span>
                {value}
                {/* {renderSwitch(value)} */}
            </span>
        </div>
    )
}

const renderSwitch = (value) => {
    switch (value) {
        case "settings":
            return <Settings />
        case "home":
            return <Home />
        default:
            return value;
    }
}