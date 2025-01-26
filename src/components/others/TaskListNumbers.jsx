import React from 'react'

const TaskListNumbers = ({data}) => {
  return (
    <div className='flex justify-evenly flex-wrap gap-5 mt-10 screen'>
        <div className="w-[45%] px-10 py-5 rounded-xl bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskCounts.newTask}</h2>
            <h3 className='text-xl font-medium'>New Task</h3>
        </div>
        <div className="w-[45%] px-10 py-5 rounded-xl bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskCounts.completed}</h2>
            <h3 className='text-xl font-medium'>Completed Task</h3>
        </div>
        <div className="w-[45%] px-10 py-5 rounded-xl bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskCounts.active}</h2>
            <h3 className='text-xl font-medium'>Accepted Task</h3>
        </div><div className="w-[45%] px-10 py-5 rounded-xl bg-red-400">
            <h2 className='text-3xl font-semibold'>{data.taskCounts.failed}</h2>
            <h3 className='text-xl font-medium'>Failed Task</h3>
        </div>
    </div>
  ) 
}

export default TaskListNumbers