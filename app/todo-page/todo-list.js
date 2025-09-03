
"use client"
import React, { useState } from 'react'

const Todo = () => {
  const [title, setTitle] = useState('')
  const [desc, setDesc] = useState('')

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    //console.log('submit')
    e.preventDefault();
    if (!title || !desc) {
      alert('Please fill all the fields')
      return;
    }
    setTask([...task, { title, desc }])
   // console.log(task)

    setTitle('');
    setDesc('');
  }

  const handleDelete = (i) => {
    let copyTask = [...task];
    copyTask.splice(i, 1);
    setTask(copyTask);
  }


  let renderTask = <h2>No Task Available</h2>
  if (task.length > 0) {
    renderTask = task.map((tsk, i) => {
      return (
        <li key={i} className='flex justify-between items-center border-b-2 border-b-amber-300 rounded-b-md'>
          <div className='flex justify-between w-2/5 items-center  rounded-md mb-3 px-2 py-1 text-bold focus:outline-none my-2'>
            <h2>{tsk.title}</h2>
            <h4>{tsk.desc}</h4>
          </div>
          <button onClick={() => handleDelete(i)} className=' bg-red-400 text-2xl ml-4 text-emerald-50 px-3 py-1 rounded-md mt-3 hover:bg-emerald-700'>
            Delete Task
          </button>
        </li>
      )
    })
  }

  return (
    <div>
      <h1 className='bg-amber-400 text-amber-50 text-center py-2'>Welcome to Todo List App</h1>
      <div className='flex justify-center flex-col items-center h-auto pt-4 pb-8 w-[70vw] m-auto mt-4 rounded-2xl border-b-emerald-600 border-2 py-3'>
        <h2 className=' text-orange-500 font-semibold text-2xl'> Manage your daily tasks</h2>

        <form action="" className='flex flex-col justify-center items-center mt-5' onSubmit={submitHandler}>
          <input type="text" className='border-2 border-emerald-600 rounded-md px-2 py-1 text-bold focus:outline-none'
            placeholder='Enter your Title'
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <input type="text" className='border-2 border-emerald-600 mt-4 rounded-md px-2 py-1 text-bold focus:outline-none ml-3'
            placeholder='Enter Description'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />

          <button type='submit' className=' bg-orange-500 text-2xl ml-4 text-emerald-50 px-3 py-1 rounded-md mt-3 hover:bg-emerald-700'
          >
            Add Todo </button>
        </form>
        <hr />

        <div className='mt-4 bg-gray-500 w-[60vw] h-auto p-3 rounded-lg'>
          <ul>
            {renderTask}
          </ul>
        </div>

      </div>

    </div>
  )
}

export default Todo