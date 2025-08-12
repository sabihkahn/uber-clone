import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'



const Userprotectedwrapper = ({children}) => {

const navigate = useNavigate()
const [data, setdata] = useState('')


useEffect(() => {
  const token = localStorage.getItem('token')
  setdata(token)
if(!token){
  navigate('/login')
}
  
}, [navigate])
if(!data){
  navigate('/login')
}

  return (
    <>{children}</>
  )
}

export default Userprotectedwrapper