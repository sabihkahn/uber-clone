import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from './FinishRide'

const CaptionRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false)
  const finishRidePanelRef = useRef(null)


  useGSAP(function () {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)'
      })
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)'
      })
    }
  }, [finishRidePanel])

  return (
    <div className='h-screen'>

      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/caption/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className='h-4/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>


      <div className='h-1/5 p-5 bg-yellow-400 items-center justify-between relative w-full' >
        <h3 className='p-1 text-center absolute top-0 w-[95%]' onClick={() => {
          setFinishRidePanel(true)
        }}><i className="ri-arrow-up-wide-line text-3xl"></i></h3>

        <div ref={finishRidePanelRef} className='fixed z-10 bottom-0 left-0 h-screen w-full translate-y-full   bg-white px-3 py-6  pt-12'>
          
          <FinishRide setFinishRidePanel={setFinishRidePanel} />
        </div>

        <div className='flex items-center justify-between'>
          <h4 className='font-semibold text-xl'>4km away</h4>
          <button className=' flex justify-center mt-5 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg'>Complete ride</button>
         
        </div>
      </div>

    </div>
  )
}

export default CaptionRiding