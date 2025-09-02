
import React from 'react'

const page = () => {
  return (
    <div>
      <h1 className='bg-amber-400 text-amber-50 text-center py-2'>Welcome to Todo List App</h1>
      <div className='flex justify-center flex-col items-center h-[80vh] w-[70vw] m-auto mt-2 rounded-2xl border-b-emerald-600 border-2 py-3'>
        <h2 className=' text-orange-500 font-semibold text-2xl'>This is the best app to manage your daily tasks</h2>
        <form action="" className='flex flex-col justify-center items-center mt-5'>
          <input type="text" placeholder='Enter your name' className='border-2 border-emerald-600 rounded-md px-2 py-1 focus:outline-none'/>
          <button type='submit' className=' bg-red-400 text-2xl text-emerald-50 px-3 py-1 rounded-md mt-3 hover:bg-emerald-700'>Get Started</button>
        </form>


      </div>



    </div>
  )
}

export default page