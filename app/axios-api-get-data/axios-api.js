import React, {useState} from 'react'
import axios from 'axios'
import Link from 'next/link'


export const AxiosGet = () => {
  const [user, setUser] = useState([])

  const getUsers = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/users')
    const data = await res.data;
    setUser(data);

    console.log(user)
  }



  return (
    <div className='flex flex-col justify-center w-[70vw] h-auto p-3 items-center m-auto mt-5 border'>
      <h2>Fetching Data</h2>

      <button onClick={getUsers} className='bg-rose-600 p-2 mt-3 rounded-b-lg font-bold'>Get Data</button>

      <div className='p-2 bg-gray-500 rounded  mt-3 font-bold w-full'>
        <ul>
          {
            user.map((usr, id) => {
              return (
              <li key={id} className='border-b-2 p-3 border-b-amber-300 rounded-b-md mb-2'>
                {usr.name} --- <Link href='' className='text-red-500'>Explore</Link> 
              </li>
            )
            })
          }
        </ul>
      </div>


    </div>
  )
}

export default AxiosGet;