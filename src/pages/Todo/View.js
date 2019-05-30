import React from 'react'
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import Button from '../../components/Button';
import MenuBar from '../../components/MenuBar';
import Tabs from '../../components/Tabs';
import TasksContainer from '../../components/TasksContainer';
import TasksTodo from '../../components/TasksContainer/Components/TasksTodo';
import TasksDone from '../../components/TasksContainer/Components/TasksDone';


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
            <TasksContainer >
                <TasksTodo />
                <TasksDone />
            </TasksContainer>

        </div>
    )
}
