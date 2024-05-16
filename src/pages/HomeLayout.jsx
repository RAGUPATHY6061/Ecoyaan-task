import React from 'react'
import { Outlet } from 'react-router-dom'

function HomeLayout() {
  return (
    <div className=' shadow-md h-12'>
        <h2 className=' text-green-600 text-3xl font-sans font-bold ml-10 flex align-middle'>Ecoyaan</h2>
        <Outlet/>
      
    </div>
  )
}

export default HomeLayout