import React from 'react'

function Community() {
  return (
    <div className='mt-[80px]'>
      <div className='flex flex-col-reverse sm:flex-row justify-evenly'>
        <div>
          <p className='text-xs'>JOIN OUR COMMUNITY</p>
          <h1 className='font-bold text-[25px] mt-6'>Creating a more sustainable <br /> future for everyone</h1>
          <p className='font-semibold my-4'>At Ecoyaan, we are more than just a platform. Our vision is to build <br /> an eco-conscious community for people and products.</p>
          <p className='font-normal text-base'>Consider us your partner for all things sustainable. To keep you motivated on the <br /> journey, we will provide you with engaging information about climate change, the <br /> latest updates on climate policies and lifestyle tips that you can adopt to <br /> reduce your impact on the environment.</p>
          <button className='bg-green-500 hover:bg-green-700 p-2 rounded-[5px] text-white mt-5'>Get in touch</button>
        </div>
        <div>
          <img src='image 3.png' className='rounded-lg h-[90%]'></img>
        </div>
      </div>
    </div>
  )
}

export default Community