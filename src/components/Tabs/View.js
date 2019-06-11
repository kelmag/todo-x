import React from 'react';
import './index.css';
import Tab from './Components/Tab';


export default function View(props) {
    const { values, tab, setTab } = props;
    return (
        <div className="tabs-container">
            {values && values.map((tabElement, i) => (<Tab key={i} tabId={i} value={tabElement} setTab={setTab} tab={tab} selected={(i === tab) && true} />))}
        </div>
    )
}
