import React from 'react'

const CaptionDetails = () => {
  return (
    <>
    
        <div className='flex items-center justify-between '>
          <div className='flex items-center justify-start gap-3'>
            <img className='h-10 w-10 rounded-full object-cover' src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fHww" alt="" />
            <h4 className='text-lg font-medium '>Srthak bhaiya</h4>
          </div>
          <div>
            <h4 className='text-xl font-semibold '>295 RS</h4>
            <p className='text-sm font-medium text-gray-600'>Earned</p>
          </div>

        </div>
        <div className='flex justify-center items-center gap-7 mt-6 bg-gray-300 rounded-lg p-2'>
          <div className='text-center'>
            <i className="text-2xl font-semibold ri-riding-line"></i>
            <h5 className='text-lg font-medium'>14</h5>
            <p className='text-sm text-gray-600'>Rides</p>
          </div>
          <div className='text-center'>
            <i className="text-2xl font-semibold ri-hourglass-fill"></i>
            <h5 className='text-lg font-medium'>7h</h5>
            <p className='text-sm text-gray-600'>Hours Online</p>
          </div>
          <div className='text-center'><i className="text-2xl font-semibold ri-speed-up-line"></i>
            <h5 className='text-lg font-medium'>10 km</h5>
            <p className='text-sm text-gray-600'>traveled </p></div>
        </div>
    </>
  )
}

export default CaptionDetails