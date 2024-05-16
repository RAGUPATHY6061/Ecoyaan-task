import React from 'react'

function Footer() {
    return (
      <div className='bg-green-500 p-8'>
        <div className='flex flex-col sm:flex-row justify-around'>
          <div className='mt-4'>
            <h1 className='font-bold text-green-900 text-2xl'>Ecoyaan</h1>
            <p className='text-gray-200 mt-4'>For climate news, lifestyle tips, <br></br>and updates follow us on Instagram.</p>
          </div>
          <div>
            <h3 className='font-semibold mb-3'>Company</h3>
            <ul>
              <li><a href='#' className='text-gray-200 hover:text-green-800'>About</a></li>
              <li><a href='#' className='text-gray-200 hover:text-green-800'>Sell on Ecoyaan</a></li>
              <li><a href='#' className='text-gray-200 hover:text-green-800'>Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className='font-semibold mb-3'>Registration Address</h3>
            <p className='text-gray-200'>1-N-12T-781/1, <br /> Sri Krishna Vilasa,<br />Urvastores,<br />Ashoknagar(MR),<br />Mangalore,<br />Dakshina Kannada- 575006,<br />Karnataka, India</p>
          </div>
          <div>
            <h3 className='font-semibold mb-3'>Contact Us</h3>
            <p className='text-gray-200'>Kindkarma E-Retail Private Limited</p>
            <p className='text-gray-200'>CIN:</p>
            <p className='text-gray-200'>U47912KA2023PTC182592</p>
            <p className='text-gray-200'>Phone:</p>
            <p className='text-gray-200'>+919360296061</p>
          </div>
        </div>
        <div className="border-t-[1.5px] border-gray-200 mt-5">
          <p className='text-center mt-4'>© 2023 - 2024, Ecoyaan <sup>TM</sup></p>
        </div>
      </div>
    )
  }

export default Footer