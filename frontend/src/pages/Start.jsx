import React from 'react'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
   <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1619059558110-c45be64b73ae?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)]  h-screen pt-8  w-full flex justify-between flex-col'>
     <img src="https://cdn-assets-eu.frontify.com/s3/frontify-enterprise-files-eu/eyJwYXRoIjoid2VhcmVcL2ZpbGVcLzhGbTh4cU5SZGZUVjUxYVh3bnEyLnN2ZyJ9:weare:F1cOF9Bps96cMy7r9Y2d7affBYsDeiDoIHfqZrbcxAw?width=1200&height=417" alt="" className=' w-14 ml-8' />
     <div className='bg-white py-5 px-5'>
      <h2 className='text-3xl font-bold'>Get Started with uber</h2>
       <Link to="/login" className=' flex items-center justify-center w-full bg-black text-white py-3 rounded-2xl mt-4'>Continue</Link>
     </div>
    </div>
  )
}

export default Start