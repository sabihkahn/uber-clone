import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel'
import VehiclePannel from '../components/VehiclePannel'
import ConfirmRide from '../components/ConfirmRide'
const Home = () => {

  const [pick, setpick] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const pannelcloseref = useRef(null)
  const [vehiclepannelOpen, setvehiclepannelOpen] = useState(false)
  const panelRef = useRef(null)
  const vehiclepannelref = useRef(null)
  const [confirmRidepannel, setconfirmRidepannel] = useState(false)
  const confirmRidepannelref = useRef(null)
  const submitHandler = async (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current,
        {
          height: '70%',
          padding: 24,
          duration: 0.4,
          ease: 'power2.out'

        })
      gsap.to(pannelcloseref.current, {
        opacity: '1'
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        duration: 0.3,
        ease: 'power2.in'
      })
      gsap.to(pannelcloseref.current, {
        opacity: '0'
      })
    }
  }, [panelOpen])


  useGSAP(() => {
    if (vehiclepannelOpen) {
      gsap.to(vehiclepannelref.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(vehiclepannelref.current,{
        transform:"translateY(100%)"
      })
    }
  },[vehiclepannelOpen])
 
    useGSAP(() => {
    if (confirmRidepannel) {
      gsap.to(confirmRidepannelref.current, {
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidepannelref.current,{
        transform:"translateY(100%)"
      })
    }
  },[confirmRidepannel])


  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src="https://media.wired.com/photos/59269cd37034dc5f91bec0f1/master/w_1313,h_1313,c_limit/GoogleMapTA.jpg" alt="" />
      </div>
      <div className='  flex flex-col absolute h-screen top-0 w-full justify-end'>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 ref={pannelcloseref} onClick={() => setpanelOpen(false)} className='absolute top-3 right-3 text-xl'><i className="ri-arrow-down-wide-line"></i></h5>
          <h4 className='text-3xl font-semibold'>Find a trip</h4>
          <form onSubmit={(e) => {
            submitHandler(e)
          }}>
            <div className='line h-18 w-1 bg-gray-900 absolute top-[37%] left-10 rounded-full'></div>
            <input
              onClick={() => { setpanelOpen(true) }}
              onChange={(e) => setpick(e.target.value)}
              className='bg-[#c4c4c4] px-12 py-2 text-lg rounded-2xl w-full mt-5'
              type="text"
              placeholder='Add a pick-up location'
              value={pick} />
            <input
              onClick={() => { setpanelOpen(true) }}
              onChange={(e) => setdestination(e.target.value)}
              className='bg-[#c7c7c7] px-12 py-2 text-lg rounded-2xl w-full mt-3'
              type="text"
              placeholder='Enter yours destination'
              value={destination} />
          </form>
        </div>
        <div ref={panelRef} className='h-[0%] bg-white overflow-hidden  '>
          <LocationSearchPannel vehiclepannelOpen={vehiclepannelOpen} setvehiclepannelOpen={setvehiclepannelOpen} panelOpen={panelOpen} setpanelOpen={setpanelOpen} />
        </div>
      </div>
      <div ref={vehiclepannelref} className='fixed z-10 bottom-0 w-full  bg-white px-3 py-6 translate-y-full'>
      <VehiclePannel setvehiclepannelOpen={setvehiclepannelOpen} />
      </div>
      <div ref={confirmRidepannelref} className='fixed z-10 bottom-0 w-full  bg-white px-3 py-6 translate-y-full'>
      <ConfirmRide />
      </div>
    </div>
  )
}

export default Home