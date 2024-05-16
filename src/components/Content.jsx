import React from 'react'

function Content() {
  return (
    <div className='mt-[-10px]'>
      <img src='carousel-1.png' className='mt-6 w-full object-fill'></img>
      <div className='absolute bottom-[250px] left-[130px]'>
        <h1 className='text-7xl font-bold '>Buy Less, <br /> Buy Better</h1>
        <p className='mt-5 font-light text-lg'>Authentic source of truth for your <br /> sustainability needs.</p>
        <button className='bg-green-500 hover:bg-green-700 p-2 rounded-[5px] text-white mt-4'>About us</button>
      </div>
    </div>
  )
}
export default Content