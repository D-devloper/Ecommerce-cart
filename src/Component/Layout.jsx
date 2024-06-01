import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const Layout = ({cartlength}) => {
  return (
    <>
     <Navbar cartlength={cartlength}/>
   
     <Outlet/>
     <Footer/>
    </>
  )
}

export default Layout