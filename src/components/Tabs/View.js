import React from 'react';
import './index.css';
import Tab from './Components/Tab';


export default function View({ values }) {
    return (
        <div className="tabs-container">
            {values && values.map((tab, i) => (<Tab value={tab} selected={(i === 0) && true} />))}
        </div>
    )
}
