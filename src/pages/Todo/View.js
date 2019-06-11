import React from 'react'
import TopBar from '../../components/TopBar';
import Title from '../../components/Title';
import Button from '../../components/Button';
import MenuBar from '../../components/MenuBar';
import Tabs from '../../components/Tabs';
import TasksContainer from '../../components/TasksContainer';
import TasksTodo from '../../components/TasksContainer/Components/TasksTodo';
import TasksDone from '../../components/TasksContainer/Components/TasksDone';


export default function View(props) {
    const { tab, setTab } = props;
    return (
        <div>
            <div className="header">
                <TopBar labels={['first', 'second', 'third']} />
                <Title value='TO DO LIST' />
            </div>
            <MenuBar>
                <Tabs values={["Todo", "Done"]} tab={tab} setTab={setTab} />
                <Button className="config-button" id="config-button" value='settings' />
            </MenuBar>
            <TasksContainer >
                {tab === 0 && <TasksTodo />}
                {tab === 1 && <TasksDone />}
            </TasksContainer>

        </div>
    )
}
