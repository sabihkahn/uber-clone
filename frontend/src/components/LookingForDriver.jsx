import React from 'react'

const LookingForDriver = (props) => {
    return (
        <div>
            <h3 className='p-3 text-center absolute top-0 w-full' onClick={() => { props.setvehiclefound(false) }}> <i className="ri-arrow-down-wide-line"></i></h3>
            <h3 className='text-xl mb-5 font-semibold'>Looking for a driver</h3>
            <div className='flex justify-center flex-col items-center gap-2'>
                <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
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

            </div>
        </div>
    )
}

export default LookingForDriver