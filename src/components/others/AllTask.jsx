import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthProvider'

const AllTask = () => {

    // const authData = useContext(AuthContext)
    const [userData, setUserData] = useContext(AuthContext)

    // console.log(authData.employees)
    return (
        <div className='bg-[#1c1c1c] p-5 mt-10 rounded-lg h-60'>
            <div className='bg-red-500 flex items-center justify-between py-2 px-4 rounded-lg mb-2'>
                <h2 className='w-1/5 text-black font-bold'>Employee</h2>
                <h3 className='w-1/5 text-black font-bold'>New Task</h3>
                <h5 className='w-1/5 text-black font-bold'>Active Task</h5>
                <h5 className='w-1/5 text-black font-bold'>Completed</h5>
                <h5 className='w-1/5 text-black font-bold'>Failed</h5>
            </div>
            <div className='h-[80%]  overflow-auto'>
            {userData.employees.map(function (element, idx) {
                return <div key={idx} className='border-2 border-red-600 flex items-center justify-between py-2 px-4 rounded-lg mb-2'>
                    <h2 className='w-1/5 text-red-500 font-medium'>{element.firstname}</h2>
                    <h3 className='w-1/5 text-red-500 font-medium'>{element.taskCounts.newTask}</h3>
                    <h5 className='w-1/5 text-red-500 font-medium'>{element.taskCounts.active}</h5>
                    <h5 className='w-1/5 text-red-500 font-medium'>{element.taskCounts.completed}</h5>
                    <h5 className='w-1/5 text-red-500 font-medium'>{element.taskCounts.failed}</h5>
                </div>
            })}
            </div>
        </div>
    )
}

export default AllTask