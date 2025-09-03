"use client"
import React from 'react'
import Todo from './todo-page/todo-list'
import AxiosGet from './axios-api-get-data/axios-api'

const page = () => {
  
  return (
    <div>
     <Todo />
     <AxiosGet />

    </div>
  )
}

export default page