import React from 'react'
import { Link } from 'react-router-dom'
import CaptionDetails from '../components/CaptionDetails'
import Ridepopup from '../components/Ridepopup'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'
import { useRef } from 'react'
import ConfirmRidepopup from '../components/ConfirmRidepopup'



const CaptionHome = () => {

  const [ridePopupPanel, setRidePopupPanel] = useState(true)
  const [confirmRidePopupPanel, setConfirmRidePopupPanel] = useState(false)

  const ridePopupPanelRef = useRef(null)
  const confirmRidePopupPanelRef = useRef(null)

 useGSAP(function () {
        if (ridePopupPanel) {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(ridePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ ridePopupPanel ])
 useGSAP(function () {
        if (confirmRidePopupPanel) {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(0)'
            })
        } else {
            gsap.to(confirmRidePopupPanelRef.current, {
                transform: 'translateY(100%)'
            })
        }
    }, [ confirmRidePopupPanel ])


  return (
    <div className='h-screen'>

      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to='/caption/logout' className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>


      <div className='h2/5 p-6 '>
        <CaptionDetails />
      </div>
      <div ref={ridePopupPanelRef} className='fixed z-10 bottom-0 w-full translate-y-full   bg-white px-3 py-6  pt-12'>
        <Ridepopup setRidePopupPanel={setRidePopupPanel}  setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
      <div ref={confirmRidePopupPanelRef} className='fixed z-10 bottom-0 h-screen w-full translate-y-full   bg-white px-3 py-6  pt-12'>
        <ConfirmRidepopup setConfirmRidePopupPanel={setConfirmRidePopupPanel} setRidePopupPanel={setRidePopupPanel} />
      </div>
    </div>
  )
}

export default CaptionHome