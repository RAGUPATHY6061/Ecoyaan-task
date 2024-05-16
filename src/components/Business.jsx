import React from 'react'

function Business() {
    return (
      <div className='mt-[80px]'>
        <div className='flex flex-col-reverse sm:flex-row justify-evenly'>
          <div>
            <p className='text-xs'>FOR BUSINESS</p>
            <h1 className='font-bold text-[25px] mt-6'>Creating a more sustainable <br /> future for everyone</h1>
            <p className='font-semibold my-4'>At Ecoyaan, we are more than just a platform. Our vision is to build <br /> an eco-conscious community for people and products.</p>
            <p className='font-normal text-base'>Consider us your partner for all things sustainable. To keep you motivated on the <br /> journey, we will provide you with engaging information about climate change, the <br /> latest updates on climate policies and lifestyle tips that you can adopt to <br /> reduce your impact on the environment.</p>
            <div className='flex mt-5 '>
              <img src='Group.png' className='h-10 mr-4'></img>
              <img src='Group1.png' className='h-10'></img>
            </div>
          </div>
          <div>
            <img src='image 6.png' className='rounded-lg h-[90%]'></img>
          </div>
        </div>
      </div>
    )
  }

export default Business