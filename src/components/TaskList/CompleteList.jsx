import React from 'react'

const CompleteList = ({data}) => {
    return (
        <div className="h-full w-[300px] bg-yellow-300 rounded-xl flex-shrink-0 p-5">
            <div className="flex justify-between items-center">
                <h3 className='bg-red-400 px-3 py-1 rounded'>{data.category}</h3>
                <h4>{data.taskDate}</h4>
            </div>
            <div className="mt-5 text-2xl font-semibold">{data.taskTitle}</div>
            <p className='text-sm mt-2'>
                {data.taskDescription}
            </p>
            <div className='mt-2'>
                <button className='w-full'>Complete</button>
            </div>
        </div>
    )
}

export default CompleteList