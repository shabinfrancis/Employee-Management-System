import React, { useContext, useState } from 'react'
import { getLocalStorage } from '../../utils/localStorage';
import { AuthContext } from '../../context/AuthProvider';

const CreateTask = () => {

    const [userData, setUserData] = useContext(AuthContext);

    const [taskTitle, setTaskTitle] = useState('');
    const [taskDate, setTaskDate] = useState('');
    const [assignTo, setAssignTo] = useState('');
    const [taskDescription, setTaskDescription] = useState('');
    const [category, setCategory] = useState('');

    const [newTask, setNewTask] = useState({});

    // const submitHandler = (e) => {
    //     e.preventDefault();


    //     // console.log(taskTitle, taskDate, assignTo, taskDescription, category);
    //     setNewTask({ taskTitle, taskDate, taskDescription, category, active: false, newTask: true, completed: false, failed: false });
    //     const res = JSON.parse(localStorage.getItem('employees'))
    //     res.forEach(function (ele) {
    //         if (assignTo == ele.firstname) {
    //             ele.tasks.push(newTask);
    //             console.log(ele)
    //         }
    //     })
    //     console.log(res)

    // console.log(newTask);

    // const storedData = localStorage.getItem('employees');
    // if(storedData) {
    //     const data = JSON.parse(storedData);    
    //     data.forEach(function(ele) {
    //         // console.log(ele.firstname);
    //         ele.tasks.push(newTask);
    //         console.log(ele)
    //     }
    // )} else {
    //     console.log('No data found');
    // }

    // const data = JSON.parse(localStorage.getItem('employees'));
    // data.forEach(function(ele) {
    //     // console.log(ele.firstname);
    //     if(assignTo == ele.firstname) {
    //         // ele.tasks.push(task);
    //         console.log(ele)
    //     }
    // })

    // setTaskTitle('');
    // setTaskDate('');
    // setAssignTo('');
    // setTaskDescription('');
    // setCategory('');


    // }

    const submitHandler = (e) => {
        e.preventDefault();

        // console.log(taskTitle, taskDate, assignTo, taskDescription, category);
        const newTask = { taskTitle, taskDate, taskDescription, category, active: false, newTask: true, completed: false, failed: false };
        // setNewTask({ taskTitle, taskDate, taskDescription, category, active: false, newTask: true, completed: false, failed: false });

        const employees = localStorage.getItem('employees');
        // if (!employees) {
        //     console.error('No employees found in local storage');
        //     return;
        // }

        const res = JSON.parse(employees);
        // const res = userData.employees;
        // console.log(res);
        res.forEach(function (ele) {
            if (assignTo == ele.firstname) {
                ele.tasks.push(newTask);
                // ele.taskCounts.newTask += 1;
                // console.log(ele.tasks);
                if (ele.taskCounts) {
                    ele.taskCounts.newTask += 1;
                } else {
                    ele.taskCounts = { newTask: 1 };
                }
            }
        });
        // console.log(res);
        localStorage.setItem('employees', JSON.stringify(res));
        setUserData({ employees: res });
        console.log(res);
        // localStorage.setItem('employees', JSON.stringify(res));

        setTaskTitle('');
        setTaskDate('');
        setAssignTo('');
        setTaskDescription('');
        setCategory('');
    }

    return (
        <div className='mt-10 p-5 rounded-lg bg-[#1c1c1c]'>
            <form onSubmit={(e) => {
                submitHandler(e);
            }} className='flex w-full items-start justify-around'>
                <div className='w-1/2'>
                    <div>
                        <h3 className='text-sm text-gray-400 mb-1'>Task Title</h3>
                        <input value={taskTitle} onChange={(e) => { setTaskTitle(e.target.value) }} className='text-sm px-4 py-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="text" placeholder='Make a UI Design' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-400 mb-1'>Date</h3>
                        <input value={taskDate} onChange={(e) => { setTaskDate(e.target.value) }} className='text-sm px-4 py-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="date" />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-400 mb-1'>Assign to</h3>
                        <input value={assignTo} onChange={(e) => { setAssignTo(e.target.value) }} className='text-sm px-4 py-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="text" placeholder='employee name' />
                    </div>
                    <div>
                        <h3 className='text-sm text-gray-400 mb-1'>Category</h3>
                        <input value={category} onChange={(e) => { setCategory(e.target.value) }} className='text-sm px-4 py-2 w-4/5 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4' type="text" placeholder='design, dev, etc' />
                    </div>
                </div>
                <div className='w-2/5 flex flex-col items-start'>
                    <h3 className='text-sm text-gray-400 mb-1'>Description</h3>
                    <textarea value={taskDescription} onChange={(e) => { setTaskDescription(e.target.value) }} className='text-sm px-4 py-2 rounded outline-none bg-transparent border-[2px] border-gray-400 mb-4 w-full' name="" id="" cols="30" rows="10"></textarea>
                    <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded-lg w-full'>Submit</button>
                </div>

            </form>
        </div>
    )
}

export default CreateTask