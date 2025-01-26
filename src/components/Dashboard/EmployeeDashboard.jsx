import React from 'react'
import Header from '../others/Header'
import TaskListNumbers from '../others/TaskListNumbers'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = (props) => {
    
    return (
        <>
            <div className="p-12 bg-[#1c1c1c] h-screen">
            {/* <h1>{data.id}</h1> */}
                <Header changeUser={props.changeUser} data={props.data} />
                <TaskListNumbers data={props.data} />
                <TaskList data={props.data} />
            </div>
        </>
    )
}

export default EmployeeDashboard