import React from 'react'
import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import HomeLayout from './pages/HomeLayout'
import Home from './pages/Home'
import About from './pages/About'

 const router = createBrowserRouter([
  {
    path:"/",
    element:<HomeLayout/>,
    children:[
      {
        index:true,
        element:<Home/>
      },
      {
        path:"about",
        element:<About/>
      },
    ],
  }
 ])
function App() {
  return (
    <RouterProvider router={router}/>
  )
}

export default App