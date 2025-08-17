import React from 'react'

const Ridepopup = () => {
  return (
    <div>
       <h3 className='p-3 text-center absolute top-0 w-full' onClick={() => { props.setconfirmRidepannel(false) }}> <i className="ri-arrow-down-wide-line"></i></h3>
            <h3 className='text-xl mb-5 font-semibold'>New Ride available!</h3>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3'>
                <img className='h-14 w-14 rounded-full object-cover ' src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                 <div >
                    <h3 className='text-xl font-mono'>Harsh patel</h3>
                 </div>
            </div>
                 <h4>2.2 km</h4>
          </div>

            <div className='flex justify-center flex-col items-center gap-2'>
               
                <div className='w-full mt-5'>
                    <div className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="text-lg ri-map-pin-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-base text-gray-600'>amdabad near kina caffe </p>
                        </div>
                    </div>
                    <div  className='flex items-center gap-5 p-3 border-b-2'>
                        <i className="ri-currency-line"></i>
                        <div>
                            <h3 className='text-lg font-medium'>cash</h3>
                            <p className='text-base text-gray-600'>150rs </p>
                        </div>
                    </div >
                    <div className='flex items-center gap-5 p-3 '>
                     <i className="ri-map-pin-user-fill"></i>
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-base text-gray-600'>amdabad near kina caffe </p>
                        </div>

                    </div>
                </div>
                <button onClick={()=>{

                }} className='w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</button>
                <button onClick={()=>{
                 
                }} className='w-full mt-1 bg-gray-300 text-gray-700 font-semibold p-3 rounded-lg'>Ignore</button>
            </div>
    </div>
  )
}

export default Ridepopup