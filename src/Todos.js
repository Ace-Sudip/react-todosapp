import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/ai";
import './todos.css';

function Todosapp() {

    const [taskname, setTaskName] = useState('');
    const [tasklist, setTaskList] = useState([]);

    function addTask() {
        setTaskList([...tasklist, taskname])
    }

    function clearTaskName() {
        setTaskName('')
    }

    const taskListContent = tasklist.map((task, index) => {
        return (
            <div><p className='tasktodo'>{task} &nbsp; <i onClick={() => (deletetask(index))} ><AiFillDelete  size={20} /></i></p>
            </div>
        )

    })

    function deletetask(index) {
        let duparray = [...tasklist];
        duparray.splice(index, 1);
        setTaskList(duparray);
    }

    return (
        <>

            <div className='container-fluid'>
            <div className='justify-content-center'>
                <div className='col-md-10 col-10 backtodo shadow  bg-info rounded'>
                    <h1 align='center' className='texttodo'>Todos-List</h1>
                    <input type='text' className='form-control w-50 inptask' placeholder='Enter Task' value={taskname}
                        onChange={(e) => { setTaskName(e.target.value) }}></input>
                    <button className=' addbtn1 ' onClick={addTask}>Add</button>
                    <button className=' addbtn2  ' onClick={clearTaskName}>Clear</button>

                    <br />
                    {taskListContent}
                </div>

            </div>

            </div>


        </>
    );
}

export default Todosapp;