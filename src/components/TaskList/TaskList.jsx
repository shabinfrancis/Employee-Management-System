import React, { useContext } from 'react'
import AcceptList from './AcceptList'
import NewList from './NewList'
import CompleteList from './CompleteList'
import FailedList from './FailedList'

const TaskList = ({data}) => {
    // console.log(data)
    return (
        <div id='task-list' className='overflow-x-auto h-[45%] w-full rounded-xl mt-10 flex items-center flex-nowrap gap-5'>
            {data.tasks.map((element, idx) => {
                if(element.active) {
                    return <AcceptList key={idx} data={element} />
                }
                if(element.newTask) {
                    return <NewList key={idx} data={element} />
                }
                if(element.completed) {
                    return <CompleteList key={idx} data={element} />
                }
                if(element.failed) {
                    return <FailedList key={idx} data={element} />
                }
            })}
        </div>
    )
}

export default TaskList