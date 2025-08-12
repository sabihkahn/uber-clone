import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { CaptionDatacontext } from '../context/CaptionContext'


const CaptionLogin = () => {
  const navigate =  useNavigate()
  const [email, setemail] = useState('')
  const [password, setpassword] = useState('')
 const { caption, setcaption } = React.useContext(CaptionDatacontext)

  const submitHandler = async (e) => {
    e.preventDefault()

  const captiondata = {
      email: email,
      password: password
    }

  await axios.post(`${import.meta.env.VITE_BASE_URL}/caption/login`,captiondata).then((res)=>{
    if([201,202,203,204,205].includes(res.status)){
      localStorage.setItem('token',res.data.token)
      setcaption(res.data.caption)
      console.log(res.data.caption)
      navigate('/caption-home')
    }

  })


    setemail('')
    setpassword('')
  }



  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://www.svgrepo.com/show/505031/uber-driver.svg" alt="" />
        <form onSubmit={(e) => {
          submitHandler(e)
        }}>
          <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
          <input
            value={email}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'
            type="email"
            onChange={(e) => setemail(e.target.value)}
            required
            placeholder='email@examle.com' />
          <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
          <input
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'
            type="password"
            required
            placeholder='password' />
          <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
        </form>
        <p className='text-center'>join as fleet? <Link to='/caption-signup' className='text-blue-600'>register as a caption</Link></p>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-[#b43e10] flex items-center justify-center text-white font-semibold mb-5 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'
        >Sign in as user</Link>
      </div>
    </div>
  )
}

export default CaptionLogin