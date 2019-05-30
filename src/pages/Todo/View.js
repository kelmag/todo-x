import React from 'react'
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import Button from '../../components/Button';
import MenuBar from '../../components/MenuBar';
import Tabs from '../../components/Tabs';


export default function View() {
    return (
        <div>
            <div className="header">
                <TopBar labels={['first', 'second', 'third']} />
                <Title value='TO DO LIST' />
            </div>
            <MenuBar>
                <Tabs values={["Todo", "Done"]} />
                <Button className="config-button" id="config-button" value='settings' />
            </MenuBar>
            <div className="tasks-todo">
                <div className="task-line">task one</div>
                <div className="task-line">task two</div>
                <div className="task-line">task three</div>
            </div>
            <div className="tasks-done">
                <div className="task-line">task one</div>
                <div className="task-line">task two</div>
                <div className="task-line">task three</div>
            </div>
        </div>
    )
}
