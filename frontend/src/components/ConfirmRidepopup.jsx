import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const ConfirmRidepopup = (props) => {

    const [Otp, setOtp] = useState('')



    const HandelSubmit = (e) => {
        e.preventDefault()

    }

    return (
        <div >

            <h3 className='text-xl mb-5 font-semibold'>Confirm this ride to start</h3>
            <div className='flex justify-between items-center rounded-lg  bg-amber-400 p-3'>
                <div className='flex items-center gap-3'>
                    <img className='h-12 w-12  rounded-full object-cover ' src="https://plus.unsplash.com/premium_photo-1689530775582-83b8abdb5020?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVyc29ufGVufDB8fDB8fHww" alt="" />
                    <div >
                        <h3 className='text-xl font-mono'>Harsh patel</h3>
                    </div>
                </div>
                <h4 className='text-lg font-semibold'>2.2 km</h4>
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
                    <div className='flex items-center gap-5 p-3 border-b-2'>
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
                <div className='mt-6  w-full '>
                    <form onSubmit={(e) => { HandelSubmit() }} >
                        <input value={Otp} onChange={(e)=>{setOtp(e.target.value)}} type="text" placeholder='Enter otp' className='bg-[#c7c7c7] px-6 py-4 text-lg rounded-2xl w-full mt-3' />
                        <Link to="/captionriding" className='w-full flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Confirm</Link>
                        <button onClick={() => {
                            props.setConfirmRidePopupPanel(false)
                            props.setRidePopupPanel(false)
                        }} className='w-full flex justify-center mt-5 bg-red-600 text-white font-semibold p-3 px-4 rounded-lg'>Cancel</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ConfirmRidepopup