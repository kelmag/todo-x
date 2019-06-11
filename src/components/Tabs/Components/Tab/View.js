import React from 'react'
import './index.css';


export default function View(props) {
    let { value, selected, tabId, setTab } = props;
    return (
        <div value={tabId} className={selected ? "tab-selected tab" : "tab"} onClick={() => setTab(tabId)}>
            {value}
        </div>
    )
}
