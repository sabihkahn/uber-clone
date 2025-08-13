import React, { useRef, useState } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPannel from '../components/LocationSearchPannel'
const Home = () => {

  const [pick, setpick] = useState('')
  const [destination, setdestination] = useState('')
  const [panelOpen, setpanelOpen] = useState(false)
  const pannelcloseref = useRef(null)
  const panelRef = useRef(null)

  const submitHandler = async (e) => {
    e.preventDefault()
  }

  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current,
        {
          height: '70%',
          padding:24
        })
      gsap.to(pannelcloseref.current, {
        opacity: '1'
      })
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding:0
      })
      gsap.to(pannelcloseref.current, {
        opacity: '0'
      })
    }
  }, [panelOpen])




  return (
    <div className='h-screen relative'>
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
        <div ref={panelRef} className='h-[0%] bg-white   '>
          <LocationSearchPannel />
        </div>
      </div>
    </div>
  )
}

export default Home