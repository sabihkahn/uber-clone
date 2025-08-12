import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Start from './pages/Start'
import UserLogin from './pages/UserLogin'
import UserSignup from './pages/UserSignup'
import CaptionLogin from './pages/CaptionLogin'
import CaptionSignup from './pages/CaptionSignup'
import Home from './pages/Home'
import Userprotectedwrapper from './pages/Userprotectedwrapper'
import Userlogout from './pages/Userlogout'
import CaptionHome from './pages/CaptionHome'
import CaptionProtectwrapper from './pages/CaptionProtectwrapper'
import Captionlogout from './pages/Captionlogout'
const App = () => {
  return (
    <>
    
    <Routes>
      <Route path="/" element={<Start />} />
      <Route path="/home" element={
        <Userprotectedwrapper>
        <Home/>
        </Userprotectedwrapper>} />
      <Route path="/user/logout" element={
        <Userprotectedwrapper>
        <Userlogout />
        </Userprotectedwrapper>} />
      <Route path="/caption-home" element={
        <CaptionProtectwrapper>
          <CaptionHome />
        </CaptionProtectwrapper>
      } />
      <Route path="/caption/logout" element={
     
          <Captionlogout />
       
      } />
      <Route path="/login" element={<UserLogin/>} />
      <Route path="/signup" element={<UserSignup/>} />
      <Route path="/caption-login" element={<CaptionLogin/>} />
      <Route path='/caption-signup' element={<CaptionSignup />} />
    </Routes>

    




    
    </>
  )
}

export default App