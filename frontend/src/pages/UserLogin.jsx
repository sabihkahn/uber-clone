import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const UserLogin = () => {

const [email, setemail] = useState('')
const [password, setpassword] = useState('')





  return (
    <div className='h-screen p-7 flex flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s" alt="" />
      <form>
        <h3 className='text-lg font-medium mb-2'>Whats your email</h3>
        <input 
        value={email}
        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'
        type="email" 
        onChange={(e)=>setemail(e.target.value)}
        required 
        placeholder='email@examle.com' />
        <h3 className='text-lg mb-2 font-medium'>Enter Password</h3>
        <input 
        value={password}
        onChange={(e)=>setpassword(e.target.value)}
        className='bg-[#eeeeee] mb-7 rounded-lg px-4 py-2  w-full text-lg placeholder:text-base'
        type="password" 
        required 
        placeholder='password' />
        <button className='bg-[#111] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
      </form>
           <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <button className='bg-[#10b461] text-white font-semibold mb-3 rounded-lg px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as Captain</button>
      </div>
    </div>
  )
}

export default UserLogin