import React, { useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
const Userlogout = () => {

    const navigate = useNavigate()

 useEffect(() => {
      const token = localStorage.getItem("token")
      axios.get(`${import.meta.env.VITE_BASE_URL}/user/logout`,{
        headers:{
            Authorization:`Bearer ${token}`
        }
      }).then((res)=>{
        if([200,201,202,204,205].includes(res.status)){
            localStorage.removeItem('token')
            navigate('/login')
        }
      })
 
 }, [])
 

  return (
    
    <>Userlogout</>
  )
}

export default Userlogout