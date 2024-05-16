import React from 'react'
import { Link } from 'react-router-dom'
function Navbar() {
  return (
    <nav >
      <ul className='flex gap-16 float-right mr-4 sm:mr-24 mt-[-27px]'>
        <li><Link to={"/"} className='font-medium text-lg text-black hover:text-green-700'>Home</Link></li>
        <li><Link to={"/about"}className='font-medium text-lg hover:text-green-700'>About</Link></li>
        <li><Link className='font-medium text-lg hover:text-green-700'>Sell</Link></li>
        <li><Link className='font-medium text-lg hover:text-green-700'>Careers</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar